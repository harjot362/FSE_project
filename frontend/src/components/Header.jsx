import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const locations = [
  "Agra", "Ahmedabad", "Ambala", "Amritsar", "Bahadurgarh", "Bengaluru",
  "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Delhi", "Hyderabad",
  "Kolkata", "Mumbai", "Pune", "Punjab"
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Choose Location");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleLocationModal = () => setIsLocationModalOpen(!isLocationModalOpen);
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
       <div className="logo">
        {/* <img src="/logo.png" alt="The Wellness Corner" />
      </div>  */}
      <a href="/">
    <img src="/logo.png" alt="The Wellness Corner" />
  </a>
  </div>
      <nav className="nav">
        <div className="nav-item">
          <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-btn">
              Benefits ▼
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>Health Checks</li>
                <li>Diagnostic Tests</li>
                <li>Medicines & Pharmacy</li>
                <li>Consult a Doctor</li>
                <li>Vision Care</li>
                <li>Wellness Plans</li>
              </ul>
            )}
          </div>
        </div>

        <div className="nav-item location-picker" onClick={toggleLocationModal}>
          <FaMapMarkerAlt className="location-icon" />
          {selectedLocation}
        </div>
        <div className="chatbot-button" onClick={() => navigate("/chatbot")}>
</div>


        <div className="nav-item">About Us</div>
        <button onClick={() => navigate("/login")} className="get-started">Get Started</button>
      </nav>
      
      {isLocationModalOpen && (
        <div className="location-modal">
          <div className="location-modal-content">
            <div className="modal-header">
              <h2>Choose Location</h2>
              <IoClose className="close-icon" onClick={toggleLocationModal} />
            </div>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Enter location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <ul className="location-list">
              {locations.filter((loc) => loc.toLowerCase().includes(search.toLowerCase())).map((loc, index) => (
                <li key={index} onClick={() => handleLocationSelect(loc)}>
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

