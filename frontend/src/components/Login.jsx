import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"; // Corrected import path

const preventRefresh = (e) => {
    e.preventDefault();
};

export default function Login() {
    return (
        <div className="wrapper signIn">
            <div className="illustration">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FER3woH-RFLlwqmPun6DfUZYBkkFc1lB9A&s" alt="illustration" />
            </div>
            <div className="form">
                <div className="heading">LOGIN</div>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" placeholder="Enter your mail" />
                    </div>
                    <button type="submit" onClick={preventRefresh}>
                        Submit
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/SignUp"> Sign Up </Link>
                </p>
            </div>
        </div>
    );
}
