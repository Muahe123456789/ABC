import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [scrolling, setScrolling] = useState(false);

  return (
    <section className={`banner ${scrolling ? 'scrolled' : ''}`} id="contact">
  <div className="banner__content">
    <h2>60 years of beauty with you</h2>
    <p>POWERED BY PLANTS</p>
    <p>PROVEN BY SCIENCE</p>
    <p>SINCE 1954</p>
  </div>
  
  <div className='banner__image'>
        <img src="../img/Product1/bio-creation.webp" alt="banner" />
      </div>
  
</section>
  );
};

export default Banner;
