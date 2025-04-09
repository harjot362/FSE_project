import axios from "axios";

const API_URL = "http://localhost:3001/api/auth"; // Adjust if backend port differs

export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);

export const login = (userData) => axios.post(`${API_URL}/login`, userData);
