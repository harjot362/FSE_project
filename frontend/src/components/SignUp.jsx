import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1Eh8l5BQYbVA0YWYbiw0sXwYQYkIgwIK8hCWQb5ywgqdK1281jRFHi5P4sfvYZMdG64&usqp=CAU" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" className="or">OR</h2>
        </form>
        <p>
          Have an account? <Link to="/Login"> Login </Link>
        </p>
      </div>
    </div>
  );
}
