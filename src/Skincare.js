import React, { useState, useEffect } from "react"; // Import useEffect
import { Link } from 'react-router-dom'; 
import "./Skincare.css";
import './ProductList.css';



const Skincare = () => {
  const [scrolling, setScrolling] = useState(false);

  // Hàm xử lý sự kiện cuộn
  const handleScroll = () => {
    // Khi người dùng cuộn xuống hơn 100px, thay đổi trạng thái scrolling
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Hook để gắn và gỡ bỏ sự kiện cuộn khi component được mount/unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị hủy
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "$157.00",
      newPrice: "$141.30"
    },
    {
      id: 2,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "$142.00",
      newPrice: "$127.80"
    },
    {
      id: 3,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye - Anti Aging Eye Care",
      size: "50ml",
      oldPrice: "$102.00",
      newPrice: "$91.80"
    },
    {
      id: 4,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/00596100_original_original_x.webp",
      name: "Gentle Care Roll-On Deodorant",
      size: "50ml",
      oldPrice: "$26.00",
      newPrice: "$23.40"
    },
    {
      id: 5,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80056458_original_original_A.webp",
      name: "Extra-Firming Neck and Décolleté",
      size: "30ml",
      oldPrice: "$104.00",
      newPrice: "$93.60"
    },
    {
      id: 6,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80044967_hero_original.webp",
      name: "Wonder Perfect Mascara 4D",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10"
    },
    {
      id: 7,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80068482_original_original_1.webp",
      name: "Total Eye Lift - Under Eye Tightening Cream",
      size: "15ml",
      oldPrice: "$105.00",
      newPrice: "$94.50"
    },
    {
      id: 8,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80102952_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "200ml",
      oldPrice: "$90.00",
      newPrice: "$81.00"
    },
    {
      id: 9,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: "$38.70"
    },
    {
      id: 10,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: "$100.80"
    },
    {
      id: 11,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: "$27.50"
    },
    {
      id: 12,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80083866_original_original_A.webp",
      name: "Sun Care Essentials",
      size: "100ml",
      oldPrice: "$78.00",
      newPrice: "$70.20"
    },
    {
      id: 13,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Lunar New Year Edition",
      size: "75ml",
      newPrice: "$204.00",
    },
    {
      id: 14,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye Lunar New Year Edition",
      size: "20ml",
      newPrice: "$102.00",
    },
    {
      id: 15,
      label: "NEW",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "30ml",
      oldPrice: "$100.00",
      newPrice: "$99.00",
    },
    {
      id: 16,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "$62.00",
      newPrice: "$40.00",
    },
    {
      id: 17,
      label: "NEW",
      imgSrc: "../img/Product1/80112531_original_original_2.jpg",
      name: "The Precious Discovery Set",
      size: "Unit",
      newPrice: "$370.00",
    },
    {
      id: 18,
      label: "NEW",
      imgSrc: "../img/Product1/80105569_original_original_1.jpg",
      name: "Rose Radiance Peptide Day Cream for Mature Skin",
      size: "20ml",
      oldPrice: "$150.00",
      newPrice: "$135.00",
    },
    {
      id: 19,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112650_original_original_1.jpg",
      name: "12-Day Advent Calendar",
      size: "Unit",
      oldPrice: "$251.00",
      newPrice: "$135.00",
    },
    {
      id: 20,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112630_original_original_1.webp",
      name: "Double Serum & Double Serum Eye Collection",
      size: "200ml - 400ml",
      oldPrice: "$252.00",
      newPrice: "$216.00",
    },
    {
      id: 21,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: "$38.70",
    },
    {
      id: 22,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: "$100.80",
    },
    {
      id: 23,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: "$27.50",
    },
    {
      id: 24,
      label: "NEW",
      imgSrc: "../img/Product1/80112647_original_original_1.jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "$44.00",
      newPrice: "$39.00",
    },
    {
      id: 25,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112664_original_original_1.jpg",
      name: "Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin",
      size: "50ml",
      oldPrice: "",
      newPrice: "$20.00",
    },
    {
      id: 26,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112658_original_original_1.jpg",
      name: "Gentle Renewing Cleansing Mousse",
      size: "50ml",
      oldPrice: "",
      newPrice: "$18.00",
    },
    {
      id: 27,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112662_original_original_1.jpg",
      name: "Instant Eye Make-Up Remover",
      size: "50ml - 125ml",
      oldPrice: "",
      newPrice: "$19.00",
    },
    {
      id: 28,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112660_original_original_1.jpg",
      name: "Cleansing Micellar Water",
      size: "100ml",
      oldPrice: "",
      newPrice: "$24.00",
    },
    {
      id: 29,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083300_original_original_X.jpg",
      name: "Eau Dynamisante",
      size: "50ml",
      oldPrice: "",
      newPrice: "$31.00",
    },
    {
      id: 30,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083315_original_original_X.jpg",
      name: "Eau Ressourçante",
      size: "50ml",
      oldPrice: "$31.00",
      newPrice: "$27.90",
    },
    {
      id: 31,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80084964_original_original_A.webp",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "50ml",
      oldPrice: "$132.00",
      newPrice: "$118.80",
    },
    {
      id: 32,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80100571_original_original_1.webp",
      name: "Multi-Active Emulsion Moisturizer",
      size: "100ml",
      oldPrice: "",
      newPrice: "$72.00",
    },
    {
      id: 33,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092160_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Emulsion",
      size: "75ml",
      oldPrice: "$51.00",
      newPrice: "$45.90",
    },
    {
      id: 34,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092153_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Silky Cream",
      size: "30ml",
      oldPrice: "0",
      newPrice: "$34.00",
    },
    {
      id: 35,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80002597_original_original_A.webp",
      name: "Super Restorative Remodelling Serumr",
      size: "50ml",
      oldPrice: "$202.00",
      newPrice: "$181.80",
    },
    {
      id: 36,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80076240_original_original_X.webp",
      name: "Moisture-Rich Body Lotion",
      size: "400ml",
      oldPrice: "$74.00",
      newPrice: "$66.60",
    },
  ];

  // State để quản lý phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Chia trang sản phẩm
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div
        className="containerskincare"
        style={{ backgroundImage: `url(/IMG/CLP_Banner_SKIN_CARE_0.jpg)` }}
      >
        <h1>Skincare</h1>
        <p>
          From daily rituals to targeted anti-aging care, discover the best in
          plant-based skincare, powered by nature's most effective active
          ingredients.
        </p>
      </div>
      
      <div className="container2">
        <p>Skincare we love</p>
        <span>DISCOVER OUR PLANT-POWERED FORMULAS</span>
        <div className="mentor__b2">
          <div className="mentor__bb2">
            <img src="../img/Product1/Triptych_DoubleSerum9.jpg" alt="blog" />
            <p>INNOVATION</p>
            <h4>New Double Serum</h4>
            <p>
              The most complete age-defying concentrate* 5 years of research on
              epigenetics.
            </p>
            <button className="btn">DISCOVER</button>
          </div>
          <div className="mentor__bb2">
            <img
              src="../img/Triptych_MA.webp"
              alt="blog"
            />
            <p>COLLECTION</p>
            <h4>Multi-Active</h4>
            <p>Line smoothing, glow, refined skin texture.</p>
            <button className="btn">DISCOVER</button>
          </div>
          <div className="mentor__bb2">
            <img
              src="../img/Triptych_Cryo.jpg"
              alt="blog"
            />
            <p>INNOVATION</p>
            <h4>Cryo-Flash Cream-Mask</h4>
            <p>A lift effect in a cryo-flash.</p>
            <button className="btn">DISCOVER</button>
          </div>
        </div>
      </div>

     <div className="shipping-contentb3">
        {[
          {
            imgSrc: "../img/illustrative-bag-delivery.svg",
            text: "Free shipping with any $50 order",
            alt: "Delivery Bag",
          },
          {
            imgSrc: "../img/C2.svg",
            text: "Earn 10 points per dollar and redeem for rewards",
            alt: "Earn Points",
          },
          {
            imgSrc: "../img/c3.webp",
            text: "Choose 3 free samples with any order",
            alt: "Free Samples",
          },
          {
            imgSrc: "../img/c4.svg",
            text: "Subscribe for 10% off and free shipping",
            alt: "Subscribe for Discount",
          },
        ].map((item, index) => (
          <div className="shipping-infob3" key={index}>
            <img src={item.imgSrc} alt={item.alt} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="containerb6">
      <div className="Contenskin" style={{
          backgroundImage: `url(/IMG/decor_05.webp), url(/IMG/decor_02.png), url(/IMG/star_01.webp)`,
          backgroundPosition: "30%, 15%, 75%",
          backgroundSize: "10%, 18%, 10%,100%",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}>
        <h1>Skincare must-haves</h1>
        <span>DISCOVER OUR ICONIC PRODUCTS</span>
      </div>

      <div id="contentb6" className="contentb6">
        {currentProducts.map((product) => (
          <div className="imgba6" key={product.id}>
            {product.label && <span>{product.label}</span>}
            
            {/* Use Link for navigation to the product detail page */}
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.imgSrc} alt={product.name} />
            </Link>

            <span>{product.name}</span>
            <p>{product.size}</p>
            {product.oldPrice && (
              <del className="card__preci card__preci--before">
                {product.oldPrice}
              </del>
            )}
            <span className="card__preci card__preci--now">
              {product.newPrice}
            </span>
            
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          id="prev"
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div id="pageNumbers" className="page-numbers">
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <button
          id="next"
          className="pagination-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    


    
      <section className={`banner ${scrolling ? 'scrolled' : ''}`} id="contact">
      <div className='banner__image'>
        <img src="../img/product-02-extra-firming-desktop.webp" alt="banner" />
      </div>
  <div className="banner__content">
    <h2>"My skin feels so soft and revitalized."</h2>
    <p>Super Restorative Day, an anti-aging cream that replenishes, targets wrinkles, visibly improves slackening, and evens skin tone.</p>
    
  </div>
  
  
  
</section>
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
      <a href="/Serums">
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
      <div className="signup-container">
        <h2>SIGN UP FOR CLARINS EMAILS</h2>
        <p>
          Sign up and we’ll keep you in the loop for special offers, exclusive
          news and more!
        </p>
        <form className="signup-form">
          <div className="form-row">
            <input
              type="email"
              placeholder="Email Address*"
              className="form-input"
              required
            />
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
            />
            <input type="text" placeholder="Last Name" className="form-input" />
            <input
              type="date"
              placeholder="Date of Birth (DD/MM/YYYY)"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label className="checkbox-container">
              <input type="checkbox" />
              Please confirm you would like to receive Clarins Canada
              newsletters. You can unsubscribe anytime.*
            </label>
          </div>
          <div className="form-row">
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skincare;
