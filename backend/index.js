const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const subscriptionRoutes = require("./routes/Subscription");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend to make requests
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
