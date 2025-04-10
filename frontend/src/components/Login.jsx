import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log("Login response:", data);

            if (res.ok) {
                alert("Login successful!");
                navigate("/"); // ✅ redirect to home
            } else {
                alert(data.message || "Login failed");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="wrapper signIn">
            <div className="illustration">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FER3woH-RFLlwqmPun6DfUZYBkkFc1lB9A&s" alt="illustration" />
            </div>
            <div className="form">
                <div className="heading">LOGIN</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <p>
                    Don't have an account? <Link to="/SignUp"> Sign Up </Link>
                </p>
            </div>
        </div>
    );
}
