const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const subscriptionRoutes = require("./routes/subscription"); // ✅ Make sure this path is correct

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // You can restrict this to "http://localhost:3000" if needed
app.use(express.json());

// Routes
app.use("/api", subscriptionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
