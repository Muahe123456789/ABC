import React, { useEffect, useState } from "react";
import "./HeaderContent.css"; 
import TypeEffect from './TypeEffect'; 
import { useNavigate } from "react-router-dom";

function HeaderContent() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    // Tạo một observer để kiểm tra khi phần tử vào viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Khi phần tử vào viewport, thay đổi trạng thái
        }
      },
      { threshold: 0.5 } // Kích hoạt khi 50% phần tử xuất hiện trong viewport
    );

    const element = document.querySelector(".header__image");
    if (element) {
      observer.observe(element); // Quan sát phần tử
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Ngừng quan sát khi component unmount
      }
    };
  }, []);
 
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/JustArrived"); 
  };

  return (
    <div className="header-container">
      <div className="header__content">
        <div className="whitd">
          <h2>Skincare</h2>
          <span className="colorsp">
            <TypeEffect />
          </span>
        </div>
        <h1>UP TO 25% OFF</h1>
        <h2>Don’t miss this!</h2>
        <h5>
          It’s your last chance to get <b>20% off</b> everything and
          <b>25% off</b> when you spend $150+.
        </h5>
        <h5>
          Stock up on our best-selling formulas and holiday gift sets. Plus,
          enjoy <b>free shipping</b> on all orders.
        </h5>
        <h4>
          <b>NO CODE REQUIRED</b>
        </h4>
        <div className="header__btn">
          <button className="btn" onClick={handleClick}>SHOP NOW</button>
        </div>
      </div>
      
      <div className="video-container">
        <iframe
          src="https://player.vimeo.com/video/982732689?h=58479&badge=0&muted=1&autoplay=1&autopause=0"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Product Video" 
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default HeaderContent;
