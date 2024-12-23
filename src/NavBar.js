import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Sử dụng useNavigate để chuyển hướng
import "./NavBar.css";
import { useCart } from "./CartContext";

const NavBar = () => {
  const [viewCount, setViewCount] = useState(0);
  const { cart } = useCart(); // Lấy cart từ CartContext
  const navigate = useNavigate(); // Hook để chuyển hướng sau khi đăng xuất

  // Tăng số lượt xem khi trang web được tải
  useEffect(() => {
    setViewCount(Math.floor(Math.random() * 1000)); // Cập nhật số lượt xem ngẫu nhiên
  }, []);

  const isLoggedIn = localStorage.getItem("authToken"); // Kiểm tra người dùng đã đăng nhập chưa
  const userName = localStorage.getItem("userName"); // Lấy tên người dùng từ localStorage

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Xóa token khỏi localStorage
    localStorage.removeItem("userName"); // Xóa tên người dùng khỏi localStorage
    navigate("/"); 
  };

  return (
    <nav>
      {/* Header của Navbar */}
      <div className="nav__header">
        <div className="nav__logo">
          <a href="../">
            <img src="../IMG/logo1.png" alt="Logo" />
          </a>
          <span className="view-count">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
            {viewCount}
          </span>
        </div>

        <label for='check-menu' className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </label>
      </div>
      {/* Danh sách các liên kết menu */}
      <input style={{display: "none"}} className="input_check-menu" type="checkbox" id="check-menu"/>

      <label for="check-menu" className="overlay_check-menu"></label>

      <ul className="nav__links" id="nav-links">
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/whats-new">What's New <i className="ri-arrow-right-line"></i></a>
    <ul className="dropdown-menu2">
      <li>
        <a href="/JustArrived">Just Arrived</a>
      </li>
      <li>
        <a href="/BestSellers">Best-Sellers</a>
      </li>
      <li>
        <a href="/OnlineExclusives">Online Exclusives</a>
      </li>
    </ul>
  </li>

  <li>
    <a href="/Skin-care">Skincare <i className="ri-arrow-right-line"></i></a>
    <ul className="dropdown-menu2">
      <li>
        <a href="#">FACE<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/Cleansers&Toners">Cleansers & Toners</a>
          </li>
          <li>
            <a href="/Serums">Serums</a>
          </li>
          <li>
            <a href="/Moisturizers">Moisturizers</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">BODY<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/BodyContouring">Body Contouring</a>
          </li>
          <li>
            <a href="/BodyFirming">Body Firming</a>
          </li>
          <li>
            <a href="/HairCare">Hair Care</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">SUN<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/SunProtection">Sun Protection</a>
          </li>
          <li>
            <a href="/AfterSun">After Sun</a>
          </li>
          <li>
            <a href="/SelfTanning">Self Tanning</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">MEN<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/Cleanse">Cleanse</a>
          </li>
          <li>
            <a href="/Shave">Shave</a>
          </li>
          <li>
            <a href="/BodyCare">Body Care</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    <a href="/Make-up">Makeup <i className="ri-arrow-right-line"></i></a>
    <ul className="dropdown-menu2">
      <li>
        <a href="#">FACE CARE<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/Primers&Highlighters">Primers & Highlighters</a>
          </li>
          <li>
            <a href="/Concealers">Concealers</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">EYES<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/EyeShadows">Eye Shadows</a>
          </li>
          <li>
            <a href="/Eyeliners">Eyeliners</a>
          </li>
          <li>
            <a href="/Mascaras">Mascaras</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">LIPS<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/LipOils">Lip Oils</a>
          </li>
          <li>
            <a href="/LipGlosses">Lip Glosses</a>
          </li>
          <li>
            <a href="/LipBalms">Lip Balms</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    <a href="/Holiday">Holiday</a>
  </li>
  <li>
    <a href="/Offers">Offers</a>
  </li>

  <li>
    <a href="/Services&Spa">Services & Spa <i className="ri-arrow-right-line"></i></a>
    <ul className="dropdown-menu2">
      <li>
        <a href="#">Beauty Services<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          <li>
            <a href="/LiveConsultation">Live Consultation</a>
          </li>
          
          <li>
            <a href="/ Clarins Live Stream">
            Clarins Live Stream
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Spa & Stores<i className="ri-arrow-right-line"></i></a>
        <ul className="dropdown-menu2">
          
          <li>
            <a href="/offer-treatment">
              Offer a Treatment
            </a>
          </li>
          <li>
            <a href="/book-skin-spa">
              Book a Skin Spa Treatment
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    <a href="#">About Us <i className="ri-arrow-right-line"></i></a>
    <ul className="dropdown-menu2">
      <li>
        <a href="/10 Reasons to Trust Clarins">10 Reasons to Trust Clarins</a>
      </li>
      <li>
        <a href="/About Responsible Beauty">About Responsible Beauty</a>
      </li>
    </ul>
  </li>
</ul>
      {/* Các nút ở phía bên phải */}
      <div className="nav__btns">
        {/* Giỏ hàng */}
        <div className="nav__cart">
          <Link to="/shopping-cart">
          <i class="ri-shopping-basket-fill"></i>
            <span className="cart-count">{cart?.length || 0}</span>{" "}
            {/* Hiển thị số lượng sản phẩm trong giỏ */}
          </Link>
        </div>

        {/* Kiểm tra xem người dùng đã đăng nhập chưa */}
        {isLoggedIn ? (
          <div>
            <div className="user-greeting">
              <span>Hi, {userName || "FPT My Project"}</span>{" "}
           
            </div>
            <button className="btna" onClick={handleLogout}>
              Log Out
            </button>{" "}
         
          </div>
        ) : (
          <Link to="/Login">
            <button className="btna">Log In</button>
          </Link>
        )}
      </div>
    </nav>
    
  );  
};

export default NavBar;
