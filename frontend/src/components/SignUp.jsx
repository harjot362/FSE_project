// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function SignUp() {
// //   return (
// //     <div className="wrapper signUp">
// //       <div className="illustration">
// //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1Eh8l5BQYbVA0YWYbiw0sXwYQYkIgwIK8hCWQb5ywgqdK1281jRFHi5P4sfvYZMdG64&usqp=CAU" alt="illustration" />
// //       </div>
// //       <div className="form">
// //         <div className="heading">CREATE AN ACCOUNT</div>
// //         <form>
// //           <div>
// //             <label htmlFor="name">Name</label>
// //             <input type="text" id="name" placeholder="Enter your name" />
// //           </div>
// //           <div>
// //             <label htmlFor="email">E-Mail</label>
// //             <input type="text" id="email" placeholder="Enter your mail" />
// //           </div>
// //           <div>
// //             <label htmlFor="password">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               placeholder="Enter your password"
// //             />
// //           </div>
// //           <button type="submit">Submit</button>
// //           <h2 align="center" className="or">OR</h2>
// //         </form>
// //         <p>
// //           Have an account? <Link to="/Login"> Login </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.id]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3001/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();
//       console.log("Signup response:", data);

//       if (res.ok) {
//         alert("Signup successful!");
//         // Optionally redirect to login
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="wrapper signUp">
//       <div className="illustration">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1Eh8l5BQYbVA0YWYbiw0sXwYQYkIgwIK8hCWQb5ywgqdK1281jRFHi5P4sfvYZMdG64&usqp=CAU" alt="illustration" />
//       </div>
//       <div className="form">
//         <div className="heading">CREATE AN ACCOUNT</div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
//           </div>
//           <div>
//             <label htmlFor="email">E-Mail</label>
//             <input type="text" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your mail" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
//           </div>
//           <button type="submit">Submit</button>
//           <h2 align="center" className="or">OR</h2>
//         </form>
//         <p>
//           Have an account? <Link to="/Login"> Login </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // For redirecting after signup

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!formData.name || !formData.email || !formData.password) {
      return alert("Please fill in all fields");
    }

    try {
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("📩 Signup response:", data);

      if (res.ok) {
        alert("✅ Signup successful!");
        // Redirect to login page
        // navigate("/login");
      } else {
        alert(`❌ ${data.msg || "Signup failed"}`);
      }
    } catch (err) {
      console.error("🔥 Signup error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1Eh8l5BQYbVA0YWYbiw0sXwYQYkIgwIK8hCWQb5ywgqdK1281jRFHi5P4sfvYZMdG64&usqp=CAU"
          alt="illustration"
        />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your mail"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
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
