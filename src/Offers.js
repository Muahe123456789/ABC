import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Offers.css";

// Danh sách các ưu đãi
const offers = [
  {
    title: "Holiday Faves",
    description:
      "Get your Holiday glow going with this 9-piece gift—a merry mix of best-selling formulas in a festive bag. FREE with any $100+ order.",
  
    imgSrc: "/img/img2.webp", // Đường dẫn tĩnh
    code: "FAVES24",
    details:
      "This set includes a beautiful selection of our best-selling products, perfect for the holiday season. Don't miss out!",
  },
  {
    title: "Precious Beauty Offer",
    description:
      "Discover our unique approach to exceptional beauty with this gift featuring Precious La Crème and a luxurious Precious velvet vanity case. FREE with any $200+ Precious purchase.",
    imgSrc: "/img/img3.jpg", // Đường dẫn tĩnh
    code: "PRECIOUSHOLIDAY24",
    details:
      "Our premium Precious Beauty Offer comes with a luxurious vanity case and the iconic La Crème formula. Limited stock available!",
  },

];

const OfferCard = ({ offer, onShowDetails }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(offer.code);
    alert(`Copied: ${offer.code}`);
  };

  return (
    <div className="offer-card">
      <div className="image-container">
        <img src={offer.imgSrc} alt={offer.title} className="offer-image" />
      </div>
      <div className="offer-content">
        <h4 className="offer-title">YOUR FREE GIFT</h4>
        <h3 className="offer-main-title">{offer.title}</h3>
        <p className="offer-description">{offer.description}</p>
        {offer.value && <strong className="offer-value">{offer.value}</strong>}
        <div className="offer-code">
          <span>Code:</span>
          <div className="code-box">{offer.code}</div>
          <button className="copy-button" onClick={handleCopyCode}>
            Copy Code
          </button>
        </div>
        <div className="buttons">
  {/* Nút "Shop now" dẫn đến một trang cụ thể */}
  <a href="/shop" className="shop-button">
    Shop now
  </a>

  {/* Nút "View Details" thực hiện hành động bằng cách gọi hàm onShowDetails */}
  <button 
    className="details-button" 
    onClick={() => onShowDetails(offer)}
  >
    View Details
  </button>
</div>
      </div>
    </div>
  );
};

function Offers() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const showDetails = (offer) => setSelectedOffer(offer);
  const closeDetails = () => setSelectedOffer(null);

  // ----------
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

  // State quản lý phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Số sản phẩm mỗi trang

  // Tính toán các chỉ số phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Xử lý chuyển trang
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // ---------
  return (
    <div className="special-offers">
      <h2 className="section-title">Special Offers</h2>
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer} onShowDetails={showDetails} />
      ))}

      {selectedOffer && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedOffer.title}</h3>
            <p>{selectedOffer.details}</p>
            <button className="close-button" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
      {/* Khu vực giới thiệu */}
      <div className="container2">
        <p>Online advantages</p>
        <span>BEAUTY BENEFITS WITH EVERY ORDER</span>
         <div className="mentor__b2">
                  {[
                    {
                      imgSrc: "../img/Product1/Triptych_DoubleSerum9.jpg",
                      label: "INNOVATION",
                      title: "New Double Serum",
                      description: "The most complete age-defying concentrate* 5 years of research on epigenetics.",
                      buttonText: "DISCOVER",
                      linkTo:"/Serums"
                    },
                    {
                      imgSrc: "../img/Product1/SpecialOffer_LIP-OIL-BALM_2024_Cherry.webp",
                      label: "NEW",
                      title: "Lip Oil Balm",
                      description: "Looks like a tinted balm. Works like lip care.",
                      buttonText: "DISCOVER",
                      linkTo: "/LipBalms", 
                    },
                    {
                      imgSrc: "../img/Product1/Triptych_Hydra_Essentiel.webp",
                      label: "NEW",
                      title: "Hydra-Essentiel Serum & Mask",
                      description: "Super plumping power.",
                      buttonText: "DISCOVER",
                      linkTo: "/product/57",
                    },
                  ].map((item, index) => (
                    <div className="mentor__bb2" key={index}>
                      <img src={item.imgSrc} alt={item.title} />
                      <p>{item.label}</p>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {/* Thay thế button bằng Link để tạo đường dẫn */}
                  <Link to={item.linkTo || "#"} className="btn">
                    {item.buttonText}
                  </Link>
                    </div>
                  ))}
                </div>
      </div>
{/* ---------------- */}
 {/* Sản phẩm nổi bật */}
   <div className="containerb6">
      <div className="Contenskin" style={{
          backgroundImage: `url(/IMG/decor_05.webp), url(/IMG/decor_02.png), url(/IMG/star_01.webp)`,
          backgroundPosition: "30%, 15%, 75%",
          backgroundSize: "10%, 18%, 10%,100%",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
        >
        <h1>Clarins must-haves</h1>
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
{/* ------------ */}
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
}

export default Offers;
