// const express = require("express");
// const cors = require("cors");
// const subscriptionRoutes = require("./routes/subscription");

// const app = express();
// app.use(cors({ origin: "http://localhost:3000" })); // ✅ Allow frontend access
// app.use(express.json()); 


// app.use("/api", subscriptionRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// app.use(cors({
//   origin: "http://localhost:3000", // Allow frontend to make requests
//   methods: ["POST", "GET"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const subscriptionRoutes = require("./routes/subscription"); // ✅ Ensure correct file path

dotenv.config();

const app = express();

app.use(cors());
const cors = require("cors");
app.use(cors({ origin: "*" })); // ✅ Allow all origins

app.use(express.json());

// Use subscription routes
app.use("/api", subscriptionRoutes); // ✅ Ensure this matches frontend API calls

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
