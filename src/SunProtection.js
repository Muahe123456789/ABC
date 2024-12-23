import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function SunProtection() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 76,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 77,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/01295260_original_original_1.webp",
      name: "UV 50 Day Screen Multi-Protection",
      size: "50ml",
      oldPrice: "$58.00",
      newPrice: "$52.20",
    },
    {
      id: 78,
      label: "NEW",
      imgSrc: "../img/Product1/80009802_original_original_1.jpg",
      name: "UV 50 Tinted Face Sunscreen",
      size: "1 light",
      oldPrice: "58.00",
      newPrice: "$2.20",
    },
    {
      id: 79,
      label: "",
      imgSrc: "../img/Product1/80050648_hero_original.jpg",
      name: "Dry Touch Facial Sunscreen SPF 50+",
      size: "30ml",
      oldPrice: "",
      newPrice: "$58.00",
    },
    {
      id: 80,
      label: "NEW",
      imgSrc: "../img/Product1/80050667_hero_original.webp",
      name: "Sunscreen Body Lotion Spray SPF 50+",
      size: "150ml",
      oldPrice: "",
      newPrice: "$44.00",
    },
    {
      id: 81,
      label: "",
      imgSrc: "../img/Product1/80050632_hero_original.jpg",
      name: "Dry Touch Facial Sunscreen SPF 30",
      size: "50ml",
      oldPrice: "",
      newPrice: "$38.00",
    },
    {
      id: 82,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80050632_hero_original.jpg",
      name: "Sunscreen Body Cream SPF 30",
      size: "150ml",
      oldPrice: "",
      newPrice: "$44.00",
    },
  ];
  // Define state for search term and sort order
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Xử lý sản phẩm: chuyển đổi giá trị oldPrice và newPrice thành số
  const processedProducts = products.map((product) => ({
    ...product,
    oldPrice: product.oldPrice
      ? parseFloat(product.oldPrice.replace("$", ""))
      : null,
    newPrice: parseFloat(product.newPrice.replace("$", "")),
  }));

  // Lọc sản phẩm theo tên
  const filteredProducts = processedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sắp xếp sản phẩm theo giá
  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.newPrice;
    const priceB = b.newPrice;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className="just-arrived-container">
      <div className="just-arrived-container">
        <div className="containerjust">
          <img
            src="/IMG/plpheader-Sun-Sunprotection-desktop.jpg"
            alt="Face Sunscreens with SPF Protection"
            className="container-image"
          />
          <h1 className="container-title">
            Face Sunscreens with SPF Protection
          </h1>
        </div>
      </div>

      <div className="product-page">
        {/* Tìm kiếm và sắp xếp */}
        <div className="product-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Danh sách sản phẩm */}
        <main className="main bd-grid">
          {sortedProducts.map((product, index) => (
            <article className="card" key={index}>
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
              <p className="product-size">{product.size}</p>
              <div className="price-containerQ">
                {product.oldPrice && (
                  <del className="old-price">{`$${product.oldPrice.toFixed(
                    2
                  )}`}</del>
                )}
                <p className="new-price">{`$${product.newPrice.toFixed(2)}`}</p>
              </div>
            </article>
          ))}
        </main>
      </div>

      <div className="just-arrived-container">
        <div className="faq-container">
          <h2>Any questions?</h2>
          <p>Our experts have the answer</p>

          {[
            {
              question: "Why is sun protection important for your skin?",
              answer:
                "Sun protection is essential to prevent premature aging, skin damage, and the risk of skin cancer. Using sunscreen shields your skin from harmful UVA and UVB rays, helping maintain a healthy and youthful complexion. Daily application ensures your skin is protected, even on cloudy days.",
            },
            {
              question: "At what age should you start using sunscreen?",
              answer:
                "It’s never too early to start using sunscreen! Dermatologists recommend applying a broad-spectrum SPF from infancy to protect delicate skin from harmful UV rays. Consistent use throughout life helps to prevent sunburns, pigmentation, and long-term skin damage.",
            },
            {
              question: "What makes Clarins sunscreens special?",
              answer:
                "Clarins sunscreens combine powerful sun protection with skin-loving ingredients. Formulated with natural plant extracts, these lightweight, non-greasy products provide effective protection against UVA/UVB rays while nourishing and hydrating your skin. Their eco-friendly formulas are also safe for marine life, ensuring protection for both your skin and the planet.",
            },
            {
              question: "Why is sunscreen vital after the age of 50?",
              answer:
                "As skin becomes thinner and more sensitive with age, sun protection is even more crucial. Clarins anti-aging sunscreens offer broad-spectrum protection while addressing age-related concerns like fine lines and dark spots. Enriched with organic plant-based ingredients, they provide nourishment, hydration, and defense against environmental stressors, keeping your skin radiant and protected.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="question-container"
              onClick={() => toggleAnswer(index)}
            >
              <h4>
                {faq.question}
                <span className="toggle-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h4>
              {openIndex === index && (
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SunProtection;
