import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Write For Us</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Service</h3>
          <ul>
            <li>COVID-19 RTPCR Test</li>
            <li>Corporate Wellness</li>
            <li>Doctor Consultation</li>
            <li>Emotional Therapy</li>
            <li>Consult a Dietitian</li>
            <li>Wellness Plans</li>
            <li>Health Packages</li>
            <li>Health Checks @ Home</li>
            <li>Elder Care Services</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Blogs</li>
            <li>Assessments</li>
            <li>Nutrition Facts</li>
            <li>Wellness Sessions</li>
            <li>Guided Wellness Programs</li>
            <li>Wellness Goals</li>
            <li>Knowledge Circles</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tools</h3>
          <ul>
            <li>BMR Calculator</li>
            <li>Body Fat Calculator</li>
            <li>1RM Calculator</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow us on:</h3>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Truworth Health Technologies Pvt. Ltd.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
