// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// // const subscriptionRoutes = require("./routes/Subscription");

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", subscriptionRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const cors = require("cors");
// app.use(cors({
//   origin: "http://localhost:3000", // Allow frontend to make requests
//   methods: ["POST", "GET"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "harjotkb_2694$", // Add your DB password here if any
  database: "simplywell", // Make sure this matches your DB name
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Stop the server if DB fails
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// Signup route (direct for now, not through /api/auth)
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
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Optional: Mount route from auth.js if needed
// const authRoutes = require("./routes/auth");
// app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
