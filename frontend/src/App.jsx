import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Subscription/>
      <Footer/>
      {/* Other components */}
    </div>
  );
}

export default App;
