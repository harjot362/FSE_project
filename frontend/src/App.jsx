import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  const isSignUpPage = location.pathname === "/signup"; // Specifically for signup

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            !isAuthPage ? (
              <>
                <Home />
                <Slider />
                <Subscription />
              </>
            ) : null
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Footer should NOT be shown on signup page but should be on other non-auth pages */}
      {!isAuthPage && !isSignUpPage && <Footer />}
    </>
  );
}

export default App;
