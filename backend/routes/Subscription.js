// routes/subscription.js
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"SimplyWell Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Thanks for Subscribing to SimplyWell!",
      text: "Hey there! You're now subscribed to SimplyWell. Stay tuned for exciting tips and updates.",
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription confirmation sent!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Could not send confirmation email" });
  }
  return res.status(200).json({ message: "Success" }); // Or similar

});

module.exports = router;
