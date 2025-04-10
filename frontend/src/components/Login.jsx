// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./SignUp.css"; // Corrected import path

// const preventRefresh = (e) => {
//     e.preventDefault();
// };

// export default function Login() {
//     return (
//         <div className="wrapper signIn">
//             <div className="illustration">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FER3woH-RFLlwqmPun6DfUZYBkkFc1lB9A&s" alt="illustration" />
//             </div>
//             <div className="form">
//                 <div className="heading">LOGIN</div>
//                 <form>
//                     <div>
//                         <label htmlFor="name">Name</label>
//                         <input type="text" id="name" placeholder="Enter your name" />
//                     </div>
//                     <div>
//                         <label htmlFor="email">E-Mail</label>
//                         <input type="email" id="email" placeholder="Enter your mail" />
//                     </div>
//                     <button type="submit" onClick={preventRefresh}>
//                         Submit
//                     </button>
//                 </form>
//                 <p>
//                     Don't have an account? <Link to="/SignUp"> Sign Up </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

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
                // Navigate to dashboard or home
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
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
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
