// import React, { useState, useEffect } from "react";
// import "./Slider.css";

// const sliderData = [
//   {
//     id: 1,
//     image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/01/Do-Pimple-Patches-Really-Work_the-wellness-corner.jpg", // Replace with real image URL
//     category: "Beauty",
//     title: "Do Pimple Patches Really Work?",
//     link: " ",
//   },
//   {
//     id: 2,
//     image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/02/Should-You-Drink-A-Protein-Shake-Before-Bed_the-wellness-corner.jpg",
//     category: "Health",
//     title: "Should we drink a protein shake before bed",
//     link: "#",
//   },
//   {
//     id: 3,
//     image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/01/trembling-after-exercising_TWC.JPG",
//     category: "Fitness",
//     title: "Do You Tremble And Shiver After Physical Activity?",
//     link: "#",
//   },
// ];

// function Slider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [autoPlay]);

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   return (

    


//     <div
//       className="slider"
//       onMouseEnter={() => setAutoPlay(false)}
//       onMouseLeave={() => setAutoPlay(true)}
//     >
//       {sliderData.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`slide ${index === activeIndex ? "active" : ""}`}
//         >
//           <a href={slide.link} className="slide-content">
//             <img src={slide.image} alt={slide.title} className="slide-image" />
//             <div className="slide-text">
//               <span className="category">{slide.category}</span>
//               <h2>{slide.title}</h2>
//             </div>
//           </a>
//         </div>
//       ))}

//       <div className="pagination">
//         {sliderData.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === activeIndex ? "active" : ""}`}
//             onClick={() => goToSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;


import React, { useState, useEffect } from "react";
import "./Slider.css";

const sliderData = [
  {
    id: 1,
    image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/01/Do-Pimple-Patches-Really-Work_the-wellness-corner.jpg", 
    category: "Beauty",
    title: "Do Pimple Patches Really Work?",
    link: "https://www.thewellnesscorner.com/blog/do-pimple-patches-really-work",
  },
  {
    id: 2,
    image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/02/Should-You-Drink-A-Protein-Shake-Before-Bed_the-wellness-corner.jpg",
    category: "Health",
    title: "Should we drink a protein shake before bed",
    link: "#",
  },
  {
    id: 3,
    image: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2025/01/trembling-after-exercising_TWC.JPG",
    category: "Fitness",
    title: "Do You Tremble And Shiver After Physical Activity?",
    link: "#",
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="blog-slider-container">
      {/* Section Title */}
      <div className="blog-header">
        <h2>From Our Blogs</h2>
        <p>Check out the latest blogs published by our community of health & wellness experts</p>
      </div>

      {/* Slider */}
      <div
        className="slider"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <a href={slide.link} className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-text">
                <span className="category">{slide.category}</span>
                <h2>{slide.title}</h2>
              </div>
            </a>
          </div>
        ))}

        <div className="pagination">
          {sliderData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
