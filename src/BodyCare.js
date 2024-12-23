import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function BodyCare() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 101,
      label: "",
      imgSrc: "../img/Product1/80085753_original_original_x (1).webp",
      name: "ClarinsMen Shampoo & Shower",
      size: "200ml",
      oldPrice: "$35.00",
      newPrice: "$31.50",
    },
    {
      id: 102,
      label: "",
      imgSrc: "../img/Product1/80080649_original_original_x.jpg",
      name: "ClarinsMen Antiperspirant Deo Roll-On",
      size: "50ml",
      oldPrice: "",
      newPrice: "$24.00",
    },
    {
      id: 103,
      label: "",
      imgSrc: "../img/Product1/80071984_original_original_X.jpg",
      name: "ClarinsMen Energizing Gel",
      size: "50ml",
      oldPrice: "$54.00",
      newPrice: "$48.60",
    },
    {
      id: 104,
      label: "",
      imgSrc: "../img/Product1/80071985_original_original_1.jpg",
      name: "ClarinsMen Energizing Eye Gel",
      size: "15ml",
      oldPrice: "$44.00",
      newPrice: "$39.60",
    },
    {
      id: 105,
      label: "",
      imgSrc: "../img/Product1/80008269_original_original_1.jpg",
      name: "ClarinsMen Line-Control Eye Balm",
      size: "20ml",
      oldPrice: "",
      newPrice: "$47.00",
    },
    {
      id: 106,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: "$38.70",
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
            src="/IMG/plpheader-MenMoisturizers-desktop.jpg"
            alt="Body Care"
            className="container-image"
          />
          <h1 className="container-title">Body Care</h1>
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
              question: "Why is body care important for your skin?",
              answer:
                "Body care is essential for maintaining the health and appearance of your skin. Regular cleansing, moisturizing, and exfoliating help to remove impurities, prevent dryness, and keep your skin soft and smooth. Proper body care supports the skin’s natural barrier, improves circulation, and helps combat signs of aging, ensuring your skin stays hydrated and glowing.",
            },
            {
              question: "At what age should you start a body care routine?",
              answer:
                "It's never too early to start caring for your body skin. A basic body care routine, including moisturizing and gentle cleansing, can begin in your teens. As your skin changes over time, incorporating exfoliation and anti-aging products will help keep your skin healthy and youthful. Tailor your body care routine to your skin's needs as you age to maintain its vitality.",
            },
            {
              question: "What makes Clarins body care products special?",
              answer:
                "Clarins body care products are renowned for their luxurious, plant-based formulations that deeply nourish and protect the skin. These products are designed to hydrate, firm, and smooth the skin while enhancing its natural beauty. With ingredients like essential oils and botanical extracts, Clarins offers body care that not only pampers but also promotes long-term skin health and radiance.",
            },
            {
              question: "Why is body care vital as you age?",
              answer:
                "As you age, your skin becomes more prone to dryness, sagging, and loss of elasticity. Body care is essential to address these concerns, providing the hydration and nourishment needed to maintain smooth, firm, and youthful skin. Clarins body care products are specially formulated to restore moisture, improve skin tone, and reduce the appearance of aging, helping to keep your skin soft and resilient at every stage of life.",
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

export default BodyCare;
