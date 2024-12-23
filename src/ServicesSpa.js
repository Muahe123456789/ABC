import React from "react";
import "./ServicesSpa.css";

const ServicesSpa = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Exclusive Services and Spa Offers</h1>
      <p className="services-subtitle">
        Treat yourself to one of our exclusive online offers or a unique
        experience at a Clarins Skin Spa. Enjoy the best of Clarins online every
        day and make your life more beautiful.
      </p>
      <div className="services-grid">
        {/* First Service */}
        <div className="service-card">
          <img
            src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/en/dw15ff45fe/content/Brand-Section-2020/services-and-spa/images/visuel1.jpg" // Thay ảnh thật ở đây
            alt="Spa Experience"
            className="service-image"
          />
          <h2>THE CLARINS SPA EXPERIENCE</h2>
          <p>
            Our personalized treatments are a subtle blend of incredibly
            effective, plant-enriched formulas combined with the Clarins touch,
            and draw upon the brand’s 65 years of spa experience. An unrivaled
            sensorial experience.
          </p>
        </div>

        {/* Second Service */}
        <div className="service-card">
          <img
            src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw2a11ed2b/content/Brand-Section-2020/services-and-spa/images/visuel2.jpg" // Thay ảnh thật ở đây
            alt="Online Services"
            className="service-image"
          />
          <h2>EXCLUSIVE ONLINE SERVICES</h2>
          <p>
            Discover all our online services, exclusive offers and products made
            just for you. Meet with one of our Clarins Coaches, buy a gift card
            or discover our products with our Virtual Try-On... You get to
            choose!
          </p>
        </div>

        {/* Third Service */}
        <div className="service-card">
          <img
            src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw79f48dcc/content/Brand-Section-2020/services-and-spa/images/visuel3.jpg" // Thay ảnh thật ở đây
            alt="Beauty Tips"
            className="service-image"
          />
          <h2>OUR BEAUTY TIPS</h2>
          <p>
            Clarins is there for you every day, for whatever you need. Discover
            beauty tips, tricks and advice, made especially for you by our
            beauty advisors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSpa;
