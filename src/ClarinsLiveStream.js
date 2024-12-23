import React, { useState } from "react";
import "./ClarinsLiveStream.css";

const ClarinsLiveStream = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extended list of products
  const products = [
    { id: 1, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwdfe74a81/content-assets/2022-bambuser/CA/2024_Black_Friday_Thumbnail_EN.jpg', name: 'Discover the perfect holiday gifts and makeup that will make you shine all season long!', description: 'WATCH NOW' },
    { id: 2, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw7e6dec96/content-assets/2022-bambuser/CA/2024_09_Friends_Family_Thumbnail_EN.jpg', name: 'Discover all the beauty secrets that make our best-sellers must-haves in your routine!', description: 'WATCH NOW' },
    { id: 3, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw107abe47/content-assets/2022-bambuser/CA/2024_DS9_Thumbnail_EN.png', name: 'Discover Double Serums new revolutionary technology that defies skin aging', description: 'WATCH NOW' },
    { id: 4, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw3f803e98/content-assets/2022-bambuser/CA/2024_Mothers_Day_Thumbnail_EN.jpg', name: 'Discover plant powered iconic products and find the perfect gift to offer to your mom!', description: 'WATCH NOW' },
    { id: 5, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwa2339e5f/content/Beauty-School-2021/img/thumbnail-ca/2021-mixologie-en.jpg', name: 'Learn the art of professional blending with Clarins Regional Trainer, Sheila Fajardo!', description: 'WATCH NOW' },
    { id: 6, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw7dcdc919/content-assets/2022-bambuser/CA/2024_Friends_Family_Thumbnail_EN.jpg', name: 'Discover the beauty secrets behind our best-selling products!', description: 'WATCH NOW' },
    { id: 7, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwee9e7918/content-assets/2022-bambuser/CA/2023_Black_Friday_Thumbnail_EN.jpg', name: 'Discover how to enhance your skin and how to illuminate your best beauty features.', description: 'WATCH NOW' },
    { id: 8, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw282a044b/content-assets/2022-bambuser/CA/2023_Fall_Friends_Family_Thumbnail_EN.jpg', name: 'Discover how to take care of your skin with the best plant-based ingredients.', description: 'WATCH NOW' },
    { id: 9, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwe273cf8b/content-assets/2022-bambuser/CA/2023_Ready_Summer_Thumbnail_EN.jpg', name: 'Discover how to achieve a better tan with less sun exposure.', description: 'WATCH NOW' },
    { id: 10, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw0217a174/content-assets/2022-bambuser/CA/2023_Bright_Plus_Thumbnail_EN.jpg', name: 'Discover how to improve your complexion and boost radiance!', description: 'WATCH NOW' },
    { id: 11, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw9caab333/content-assets/2022-bambuser/CA/2023_Spring_Glow_Thumbnail_EN.jpg', name: 'Discover how to achieve a glowy makeup look for spring!', description: 'WATCH NOW' },
    { id: 12, image: 'https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwbf3de785/content-assets/2022-bambuser/CA/2023_bestsellers_Thumbnail_EN.jpg', name: 'Discover our Clarins Best-Sellers and our expertise in skin care.', description: 'WATCH NOW' },
  ];

  // Number of visible products
  const visibleProducts = 3;

  // Calculate the total slides (each slide contains 3 items)
  const totalSlides = Math.ceil(products.length / visibleProducts);

  // Next button: Move to the next group
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1 // Wrap back to the first group
    );
  };

  // Previous button: Move to the previous group
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalSlides - 1 : prevIndex - 1 // Wrap to the last group
    );
  };

  return (
    <div>
      {/* Clarins Image Section */}
      {/* Clarins Image Section */}
<div className="clarins-container">
  <div className="clarins-image">
    <img
      src="./img/header-desktop-ca.jpg"
      alt="Clarins Live Stream"
      className="clarins-image-element"
    />
  </div>

  {/* Clarins Content Section */}
  <div className="clarins-content">
    <h1 className="clarins-title">
      <strong>Clarins</strong>
    </h1>
    <h1>Live Stream</h1>
    <p className="clarins-description">
      Join our experts and special guests for beauty and wellness tips and
      tricks—from spa-inspired application methods to easy makeup tutorials,
      and more. Tune in live or watch on-demand to make the most of your
      beauty routine.
    </p>
  </div>
</div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <h2 className="carousel-header">On Demand</h2>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              width: `${totalSlides * 100}%`, // Dynamic track width based on the number of slides
              transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
            }}
          >
            {products.map((product) => (
              <div
                className="carousel-item"
                key={product.id}
                style={{ width: `${100 / (totalSlides * visibleProducts)}%` }} // Adjust item width
              >
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-navigation">
          <button className="prev-btn" onClick={handlePrev}>
            &#60;
          </button>
          <button className="next-btn" onClick={handleNext}>
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClarinsLiveStream;
