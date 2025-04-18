const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const nodemailer = require("nodemailer");
const db = require("./db");

dotenv.config();

const app = express();

// ✅ CORS setup — allow frontend (on port 3000)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ✅ OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🔹 Chatbot route
app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message?.trim();
  if (!userMessage) {
    return res.status(400).json({ reply: "Please provide a message." });
  }

  const lowerMsg = userMessage.toLowerCase();
  let botReply = "";

  if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
    botReply = "Hello! How can I assist you today?";
  } else if (lowerMsg.includes("your name")) {
    botReply = "I'm SimplyWell's virtual assistant.";
  } else if (lowerMsg.includes("services")) {
    botReply = "We offer wellness consultations, fitness programs, and health tracking.";
  } else if (lowerMsg.includes("help")) {
    botReply = "Sure! I can help you with wellness advice, booking consultations, or general info.";
  } else {
    botReply = "I'm sorry, I didn't understand that. Could you please rephrase?";
  }

  const insertQuery = "INSERT INTO chat_history (user_message, bot_reply) VALUES (?, ?)";
  db.query(insertQuery, [userMessage, botReply], (err) => {
    if (err) {
      console.error("❌ Failed to insert chat:", err.message);
      return res.status(500).json({ reply: "Error saving chat." });
    }

    return res.status(200).json({ reply: botReply });
  });
});

// 🔹 Newsletter subscription
app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const query = "INSERT INTO subscriptions (email) VALUES (?)";
  db.query(query, [email], (err) => {
    if (err) {
      console.error("❌ DB Error:", err.message);
      return res.status(500).json({ error: "Subscription failed" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Confirmation",
      text: "Thanks for subscribing to SimplyWell! You’ll get updates soon 😊",
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("❌ Email Error:", err.message);
        return res.status(500).json({ error: "Failed to send confirmation email." });
      }
      console.log("✅ Email sent:", info.response);
      return res.status(200).json({ message: "Subscription successful!" });
    });
  });
});

// 🔹 Signup route (no hashing yet!)
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

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

// 🔹 Auth routes (login logic with bcrypt/jwt)
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
