//HomePage.jsx
import React from "react";
import "./Home.css"; // Importing the Homepage CSS

const services = [
  { name: "Health Checks", description: "Get a comprehensive health checkup to stay ahead of any health concerns.", icon: "🩺" },
  { name: "Diagnostic Tests", description: "Wide range of diagnostic tests for accurate health assessments.", icon: "🔬" },
  { name: "Medicines", description: "Order medicines online and get them delivered to your doorstep.", icon: "💊" },
  // { name: "Gym Memberships", description: "Access top-tier gyms with customized membership plans.", icon: "🏋️" },
  { name: "Consult a Doctor", description: "Consult experienced doctors from the comfort of your home.", icon: "👨‍⚕️" },
  // { name: "Emotional Therapy", description: "Talk to certified therapists for mental well-being.", icon: "🧠" },
  { name: "Fitness", description: "Personalized diet plans for a healthier lifestyle.", icon: "🥗" },
  { name: "Vision Care", description: "Comprehensive eye check-ups and vision care.", icon: "👁️" },
  { name: "Dental Care", description: "Advanced dental treatments and oral hygiene consultations.", icon: "🦷" },
  { name: "Wellness Plans", description: "Choose the right wellness plan tailored for you.", icon: "📋" },
];

const Home = () => {
  return (
    <div className="home">
     
      
      {/* Main Content */}
      <main className="main-content">
        <section className="hero-section">
          <h1>Your Wellness Journey Starts Now</h1>
          <p>Take the first step towards a healthier you with our holistic approach to wellness. One-stop destination for all your healthcare needs.</p>
          {/* <button className="cta-button">Get Started</button> */}
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => alert(`${service.name} selected!`)}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Home;