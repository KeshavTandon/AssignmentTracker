const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require('crypto');

// Generate a secure random string for JWT secret key
const generateJWTSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

// Generate JWT secret key
const JWT_SECRET = generateJWTSecret();

router.post("/login", async (req, res) => {
  const { rollno, password } = req.body;

  const user = await User.findOne({ rollno });

  if (!user) return res.status(400).send("Invalid rollno or password.");

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(400).send("Invalid rollno or password.");

  const token = jwt.sign({ userId: user.id }, JWT_SECRET);

  res.send({ token });
});

router.post("/register", async (req, res) => {
  try {
    const { id, rollno, fullname, mobile, password } = req.body;

    const existingUser = await User.findOne({ rollno });
    if (existingUser) {
      return res.status(400).json({ error: "rollno already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      id,
      rollno,
      fullname,
      mobile,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.json({
      message: "User registered successfully",
      userId: savedUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;