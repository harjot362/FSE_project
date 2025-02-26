// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import CORS

// Initialize the Express app
const app = express();

// Use CORS to allow requests from frontend
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Set the port number
const PORT = process.env.PORT || 3002;
app.use(express.static('public'));

// Set up a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // The host of your MySQL server (e.g., 'localhost' or an IP address)
  user: 'root',       // Your MySQL username
  password: 'harjotkb_2694$', // Your MySQL password
  database: 'SimplyWell' // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database');
});

// API endpoint to fetch all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM user_details', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query error' });
      return;
    }
    res.json(results); // Return the results as JSON
  });
});

// API endpoint to fetch a single user's health info by user_id
app.get('/user/:id/health-info', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM user_health_info WHERE user_id = ?', [userId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(results[0]); // Return health info for the user
  });
});
app.get('/', (req, res) => {
    res.send('Welcome to the SimplyWell API!');
  });
  
// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
