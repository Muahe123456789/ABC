import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <section className="section__container mentor__container">
  <div className="section__header-container">
    <h2 className="section__header">Our Exclusive Services</h2>
    <p className="section__description">CREATED TO MAKE YOUR LIFE MORE BEAUTIFUL</p>
  </div>

  <div className="mentor__grid">
    <div className="mentor__card">
      <img
        src="../img/Product1/25_live-consultation_200x151 (1).webp"
        alt="blog"
      />
      <h4>Live Consultation</h4>
      <p>Receive a one-to-one personalized beauty advice.</p>
      <a href="/LiveConsultation">
        <button className="btn">DISCOVER</button>
      </a>
    </div>
    <div className="mentor__card">
      <img
        src="../img/Product1/CS_PushCarousel_SERUMFINDER2023.webp"
        alt="blog"
      />
      <h4>Serum Finder</h4>
      <p>Find the Clarins serum that perfectly targets your skin's needs.</p>
      <a href="Serums">
        <button className="btn">DISCOVER</button>
      </a>
    </div>
    <div className="mentor__card">
      <img
        src="../img/Product1/CBA_HP_Pushs-Carousel-292x292_GIFTCARD_INTE.webp"
        alt="blog"
      />
      <h4>Gift Cards</h4>
      <p>Take the guesswork out of gifting, and let them choose their favorites.</p>
      <a href="/offer-treatment">
        <button className="btn">DISCOVER</button>
      </a>
    </div>
  </div>
</section>
    
  );
};

export default Services;
