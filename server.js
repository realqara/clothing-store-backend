const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle empty JSON requests
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON format" });
  }
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", async () => {
  console.log("MongoDB connected");

  // Add indexes for faster queries
  try {
    await db.collection("users").createIndex({ email: 1 }, { unique: true }); // Optimize user lookup
    await db.collection("products").createIndex({ price: -1 }); // Faster sorting by price
    await db.collection("orders").createIndex({ user_id: 1 }); // Optimize orders per user

    console.log("Indexes created successfully!");
  } catch (error) {
    console.error("Error creating indexes:", error);
  }
});

db.on("error", (err) => console.error("MongoDB error:", err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
