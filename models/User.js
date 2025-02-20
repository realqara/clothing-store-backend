const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  user_id: Number,
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  registration_date: String,
  orders: Array,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);