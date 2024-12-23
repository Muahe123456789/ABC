import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import "./Abouts.css";

const sliderData = [
  { 
    year: "2024", 
    title: "30% less carbon emissions", 
    description: "Reducing environmental impact.",
    images: ["../img/vignette-2025.png", "../img/vignette-2024.png",]
  },
  { 
    year: "2020", 
    title: "Social Actions", 
    description: "Working for a fairer future.",
    images: ["../img/vignette-2020.png", "../img/vignette-2016.png",]
  },
  { 
    year: "2016", 
    title: "Prix Clarins", 
    description: "Commitment to children and families.",
    images: ["../img/vignette-2014.png", "../img/vignette-2007.png",]
  },
  { 
    year: "1997", 
    title: "The Clarins Award", 
    description: "Supporting women's causes.",
    images: ["../img/vignette-1999.png", "../img/vignette-1997.png",]
  },
  { 
    year: "1992/1993", 
    title: "Sustainable Initiatives", 
    description: "BEGINNING OF PARTNERSHIP WITH ALP ACTION.",
    images: ["../img/vignette-1992-1993.png","../img/push-3-v2.webp"]
  },
];

function AboutsBeauty() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
  };
  window.addEventListener('scroll', function() {
    const image = document.querySelector('.slide-image');
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Khi ảnh vào trong vùng nhìn thấy của người dùng
    if (imagePosition < windowHeight) {
      image.style.right = '0'; // Đưa ảnh vào trong viewport
    }
  });
  // ---------
  // Chọn tất cả các phần tử .planet-image để theo dõi
const planetImages = document.querySelectorAll('.planet-image');

// Tạo một IntersectionObserver để theo dõi khi phần tử vào viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Khi phần tử vào viewport, thêm lớp 'visible' để kích hoạt hiệu ứng
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5 // Kích hoạt khi 50% phần tử vào viewport
});

// Quan sát tất cả các phần tử .planet-image
planetImages.forEach(image => {
  observer.observe(image);
});



  return (
    <div className="app-container">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-header">
          <img
            src="../img/header.webp"
            alt="Responsible Beauty"
            className="mission-image"
          />
          <h1 className="mission-title">Responsible Beauty at Clarins</h1>
        </div>
        <div className="mission-content">
          <h3>OUR MISSION</h3>
          <p>Make life more beautiful </p>
          <p> and passing on a more beautiful planet.</p>
          <img
            src="../img/photo-alpes.png"
            alt="Nature Image"
            className="mission-nature-image"
          />
          <div className="mission-card">
            <h4>CLARINS WE CARE</h4>
            <p>
              This mission comes with a concrete set of commitments and a
              two-pronged promise to do more and to do better, for you and the
              planet.
            </p>
            
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="people-section">
  <div className="people-content">
    <h2>
      Taking care of <span>people</span>
    </h2>
    <div className="social-actions">
      <h3>Social Actions</h3>
      <p>Listening is at the core of our philosophy.</p>
      <p>Our aestheticians and beauty advisors are there to listen and guide you, helping you to feel good in your skin and confident in your beauty.</p>
      <p>CLARINS HAS LONG BEEN COMMITTED TO WORKING TOWARDS A FAIRER AND MORE UNITED FUTURE.</p>
    </div>
  </div>
  <div className="people-image">
    <img
      src="../img/key-visual-04-personnes.png"
      alt="Smiling children"
      className="slide-image"
    />
  </div>
</section>


      {/* Planet Section */}
<section className="planet-section">
<div className="planet-image">
    <img
      src="../img/key-visual-08-planete.png"
      alt="Nature landscape"
      className="slide-image"
    />
  </div>
  <div className="planet-content">
    <h2>
      Taking care of <span>the planet</span>
    </h2>
    <div className="planet-stats">
      <h3>30% less carbon emissions by 2025</h3>
      <p>
        Taking care of the planet means reducing our environmental impact.
      </p>
     
    </div>
  </div>
 
</section>


      <section className="slider-section">
  <h2 className="slider-title">Corporate Social Responsibility at Clarins</h2>
  
 
  <div className="slider-images-container">
    {sliderData[currentSlide].images.map((image, imgIndex) => (
      <img
        key={imgIndex}
        src={image}
        alt={`Slide ${currentSlide} - ${imgIndex}`}
        className="slider-image"
      />
    ))}
  </div>


  <div className="slider-container">
    <button className="slider-btn prev" onClick={prevSlide}>
      <FaArrowLeft />
    </button>

    <div className="slide-content">
      <h3>{sliderData[currentSlide].year}</h3>
      <p>{sliderData[currentSlide].title}</p>
      <p>{sliderData[currentSlide].description}</p>
    </div>

    <button className="slider-btn next" onClick={nextSlide}>
      <FaArrowRight />
    </button>
  </div>
</section>

    </div>
  );
}

export default AboutsBeauty;
