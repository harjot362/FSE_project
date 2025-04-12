import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  console.log("Token exists?", !!token); // ✅ Logs true if token exists, false if not

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

