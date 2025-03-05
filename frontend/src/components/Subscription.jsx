import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiMail, FiArrowRight } from "react-icons/fi";
import "./Subscription.css";

function Subscription() {
  const location = useLocation(); // ✅ Hook at the top level

  // ✅ Define condition after all hooks
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  // ✅ Hook must ALWAYS be called before any return statement
  const [email, setEmail] = useState(""); 

  if (isAuthPage) return null; // ✅ Safe to conditionally return AFTER hooks

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail(""); // Clear input after submission
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
