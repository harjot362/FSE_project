
// import { Routes, Route, useLocation } from "react-router-dom";
// import React from "react";

// import Home from "./components/Home";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import Header from "./components/Header";
// import Slider from "./components/Slider";
// import Subscription from "./components/Subscription";
// import Footer from "./components/Footer";

// function App() {
//   const location = useLocation();
//   const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!isAuthPage && <Header />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <Slider />
//               <Subscription />
//             </>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>

//       {!isAuthPage && <Footer />}
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

// import { useAuth } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  // const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <Home />
                <Slider />
                <Subscription />
              </>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
