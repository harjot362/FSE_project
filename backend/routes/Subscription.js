const express = require("express");  // ✅ Ensure this appears only once
const router = express.Router(); // ✅ Define router only once

router.post("/subscribe", (req, res) => {
  res.json({ message: "Subscription successful!" });
});

module.exports = router; // ✅ Ensure module is exported
