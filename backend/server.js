const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // You can specify origin for security
app.use(express.json());

// Setup OpenAI
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

// Optional: Subscription routes (if any)
const subscriptionRoutes = require("./routes/subscription");
app.use("/api", subscriptionRoutes);

// Chatbot route
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.data.choices[0].message.content });
  } catch (err) {
    console.error("Error with OpenAI API:", err.message);
    res.status(500).json({ error: "Failed to generate response." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
