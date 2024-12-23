import React, { useEffect } from 'react';
import './Footer.css'; 
import 'remixicon/fonts/remixicon.css';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle the visibility of the scroll-to-top button based on scroll position
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button after scrolling down 300px
    window.onscroll = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  }, []);

  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    navigate(path); // Điều hướng đến đường dẫn mong muốn
  };

  return (
    <section className="footer">
      <div className="footer__container">
        {/* Contact Information */}
        <div className="footer__col footer__contact">
          <a href="../" className="footer__logo">
            <img src="../img/logo1.png" alt="logo" />
          </a>
          <ul className="footer__links">
            <li>
              <a href="#">
                <i className="ri-phone-line"></i> +33145440619
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-map-pin-line"></i> 10 Rue de Babylone, 75007 Paris
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-mail-line"></i> Clarins.Fr
              </a>
            </li>
          </ul>
        </div>
        {/* -------------------- */}
               {/* About Clarins Section */}
<div className="footer__about">
          <h4 className="footer__title">About Clarins</h4>
          <ul className="footer__links">
          <li onClick={() => handleNavigate("/10 Reasons to Trust Clarins")}><a href='#'>10 Reasons to Trust Clarins</a></li> 
          <li onClick={() => handleNavigate("/About Responsible Beauty")}><a href='#'>About Responsible Beauty</a></li> 
          </ul>
        </div>

        <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.014390881393!2d2.355172211523167!3d48.85793597121243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f028bd0f193%3A0x32cf897b0dbe5029!2sBoutique%20Clarins%20Paris%204!5e0!3m2!1svi!2s!4v1734063553504!5m2!1svi!2s"
    width="300"
    height="200"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Embed"
  ></iframe>
</div>
      </div>
      <div className="footer__container">


        {/* Follow Us */}
        <div className="footer__social">
          <h4 className="footer__title">Follow Us</h4>
          <ul className="footer__social-links">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <i className="ri-facebook-line"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <i className="ri-instagram-line"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <i className="ri-twitter-line"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <i className="ri-youtube-line"></i> YouTube
              </a>
            </li>
          </ul>
          <div style={{ textAlign: "center", marginTop: "20px", }}>

            {/* Connect with Us */}
        <div className="footer__colaa">
          <h4 className="footer__title">Connect with Us</h4>
          <form className="footer__email-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
    
        </div>

        {/* Product Catalog Section */}
        <div className="footer__product-catalog">
          <h4 className="footer__title">Product Catalog</h4>
          <ul className="footer__links">
          <li onClick={() => handleNavigate("/whats-new")}><a href='#'>What's New</a></li>
          <li onClick={() => handleNavigate("/Skin-care")}><a href='#'>Skincare</a></li> 
          <li onClick={() => handleNavigate("/Make-up")}><a href='#'>Makeup</a></li>   
          <li onClick={() => handleNavigate("/BestSellers")}><a href='#'>Best-Sellers</a></li>        
          <li onClick={() => handleNavigate("/Cleansers&Toners")}><a href='#'>Cleansers & Toners</a></li>        
          <li onClick={() => handleNavigate("/BodyContouring")}><a href='#'>Body Contouring</a></li>        
          <li onClick={() => handleNavigate("/SunProtection")}><a href='#'>Sun Protection</a></li>        
                 
  
          </ul>
        </div>
 
        {/* Hours Section */}
        <div className="footer__hours">
          <h4 className="footer__title">Hours</h4>
          <ul className="footer__links">
            <li>Monday 09:15am - 19:15pm</li>
            <li>Tuesday 09:15am - 19:15pm</li>
            <li>Wednesday 09:15am - 19:15pm</li>
            <li>Thursday 09:15am - 19:15pm</li>
            <li>Friday 09:15am - 19:15pm</li>
            <li>Saturday 09:15am - 19:15pm</li>
            <li>Sunday 10:30am - 18:30pm</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <button 
        id="scrollToTopBtn" 
        className="scroll-to-top-btn" 
        onClick={scrollToTop}
        style={{ display: 'none' }} // Initially hidden
      >
        ↑
      </button>
    </section>
  );
};

export default Footer;
