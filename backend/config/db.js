const mysql = require("mysql2"); // ✅ Use mysql2 instead of mysql
require("dotenv").config();

const db = mysql.createPool({  // ✅ Use createPool for better performance
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
  connection.release(); // ✅ Release the connection
});

module.exports = db.promise(); // ✅ Use promise-based queries
