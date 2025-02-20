const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const user = new User({ first_name, last_name, email, password });
  await user.save();
  res.status(201).json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;