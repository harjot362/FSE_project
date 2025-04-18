// Subscription.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiMail, FiArrowRight } from "react-icons/fi";
import "./Subscription.css";

function Subscription() {
  const location = useLocation();  
  const [email, setEmail] = useState("");

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  if (isAuthPage) return null;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Subscription successful!");
        setEmail("");
      } else {
        alert(data.error || "Subscription failed");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to connect to the server. Try again later.");
    }
  };

  return (
    <div className="subscription-container">
      <div className="subscription-content">
        <h2>Subscribe to our newsletter</h2>
        <p>Sign up and receive the latest tips via email.</p>
      </div>
      <form className="subscription-form" onSubmit={handleSubscribe}>
        <div className="input-container">
          <FiMail className="icon" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="subscribe-button">
          <FiArrowRight />
        </button>
      </form>
    </div>
  );
}

export default Subscription;
