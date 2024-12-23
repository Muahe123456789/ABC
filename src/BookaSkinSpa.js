import React from "react";
import "./BookaSkinSpa.css";

const BookaSkinSpa = () => {
  return (
    <div className="spa-card-container">
      {/* Hình ảnh lớn */}
      <div className="spa-card-image">
        <img
          src="../img/skinspa-header.jpg" // Thay bằng URL ảnh thật
          alt="Spa Treatment"
        />
      </div>

      {/* Nội dung thông tin */}
      <div className="spa-card-content">
        <h2 className="spa-card-title">Clarins Skin Spa Laval</h2>
        <p className="spa-card-subtitle">Skin Spa</p>
        <p className="spa-card-address">
          805 DESSERTE EAST, HIGHWAY 13 <br />
          LAVAL QC H7W 5N4
        </p>
        <p className="spa-card-phone">450.688.2178</p>

        {/* Nút */}
        <div className="spa-card-buttons">
        <a href="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/en_CA/dw10ade52a/content/canada-spas/assets/2024-skin-spa-laval-treatment-menu-en.pdf" className="btn spa-menu">SPA MENU</a>
        <a href="https://www.facebook.com/people/Clarins-Skin-Spa-Laval/61570972947090/?locale=vi_VN" className="btn spa-menu">Booking</a>
          
        </div>
      </div>
    </div>
  );
};

export default BookaSkinSpa;
