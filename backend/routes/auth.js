const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Login request received:", email, password);

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(400).json({ msg: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ msg: "Invalid password" });

    // ✅ Update lastLogin time
    const loginTime = new Date();
    db.query("UPDATE users SET lastLogin = ? WHERE id = ?", [loginTime, user.id]);

    // ✅ Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
});


// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const q = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, hashedPassword];

    db.query(q, values, (err, result) => {
      if (err) {
        console.error("❌ Signup DB error:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }

      console.log("✅ User registered:", result);
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("❌ Hashing error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
