import React, { } from "react";
import { Link } from "react-router-dom";
import "./ShippingInfo.css";

const ShippingInfo = () => {
  const products = [
    {
      id: 1,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "$157.00",
      newPrice: "$141.30",
    },
    {
      id: 2,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "$142.00",
      newPrice: "$127.80",
    },
    {
      id: 3,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye - Anti Aging Eye Care",
      size: "50ml",
      oldPrice: "$102.00",
      newPrice: "$91.80",
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
      id: 29,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083300_original_original_X.jpg",
      name: "Eau Dynamisante",
      size: "50ml",
      oldPrice: "",
      newPrice: "$31.00",
    },
  ];

      // 



      
  return (
    <div>
      {/* Thông tin giao hàng */}
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

      {/* Best Seller Section */}
      <h1 className="title-shop" id="powder">
        BEST SELLER
      </h1>
      <main className="main bd-grid">
        {products.map((product, index) => (
          <article className="cardq" key={index}>
            <Link to={`/product/${product.id}`}>
              <div className="card__img">
                <div style={{ marginLeft: "50px" }}>
                  <span style={{ color: "#FF1493", fontWeight: "bold" }}>
                    {product.label}
                  </span>
                </div>
                <img src={product.imgSrc} alt={product.name} loading="lazy" />
              </div>
            </Link>
            <div className="card__name">
              <p>{product.name}</p>
            </div>
          </article>
        ))}
      </main>

      {/* Cosmic Holiday Section */}
      <div
        className="Contenskin"
        style={{
          backgroundImage: `url(/IMG/decor_05.webp), url(/IMG/decor_02.png), url(/IMG/star_01.webp)`,
          backgroundPosition: "30%, 15%, 75%",
          backgroundSize: "10%, 18%, 10%,100%",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <h1>Cosmic Holiday</h1>
        <span>DISCOVER OUR PLANT-POWERED FORMULAS</span>
      </div>

      {/* BBA Section */}
      <div className="bba">
        {[
          {
            imgSrc: "../img/Highlight_HOLIDAYS-2024_Best-Sellers_Double-Serum-Light.webp",
            text: "SKIN CARE",
            link: "/skin-care",
          },
          {
            imgSrc: "../img/categorie-02-makeup.webp",
            text: "MAKEUP",
            link: "/Make-up",
          },
          {
            imgSrc: "../img/Highlight_HOLIDAYS-2024_Best-Sellers_Body-Oil-Tonic.webp",
            text: "BODY CARE",
            link: "/BodyCare",
          },
          {
            imgSrc: "../img/Highlight_HOLIDAYS-2024_Gift-Sets_Lip-Confort-Oil-Holiday-Season-Ultimate-Holiday-Lip-Care.webp",
            text: "Gift Cards",
            link: "/offer-treatment",
          },
        ].map((item, index) => (
          <div key={index} className={index % 2 === 0 ? "imgba" : "imgba2"}>
            <a href={item.link} className="link-container">
              <img src={item.imgSrc} alt={item.text} />
              <h1>{item.text}</h1>
              <button className="btn">SHOP NOW</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingInfo;
