const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); 
require("dotenv").config();

const db = require("./db"); // ✅ Using the db connection from db.js

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// No need to define `db.connect()` again if it's in db.js

// Signup route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting user:", err.message);
      return res.status(500).json({ error: "Signup failed" });
    }

    console.log("✅ User registered:", result.insertId);
    return res.status(200).json({ message: "Signup successful" });
  });
});

// Chatbot route
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message;
  let botReply = "";

  if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
    botReply = "Hello! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes("what is your name")) {
    botReply = "I'm SimplyWell's virtual assistant.";
  } else if (userMessage.toLowerCase().includes("services")) {
    botReply = "We offer wellness consultations, fitness programs, and health tracking.";
  } else {
    botReply = "I'm sorry, I didn't understand that. Could you please rephrase?";
  }

  const insertQuery = "INSERT INTO chat_history (user_message, bot_reply) VALUES (?, ?)";

  db.query(insertQuery, [userMessage, botReply], (err, result) => {
    if (err) {
      console.error("❌ Failed to insert chat:", err.message);
      return res.status(500).json({ reply: "Error saving chat." });
    }
    return res.status(200).json({ reply: botReply });
  });
});

// Auth routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
