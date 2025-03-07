const express = require("express");
const router = express.Router();

router.post("/subscribe", (req, res) => {
  res.json({ message: "Subscription successful!" });
});

module.exports = router; // ✅ Ensure module is exported
