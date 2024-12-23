import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function AfterSun() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 83,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 84,
      label: "",
      imgSrc: "../img/Product1/80050669_original_original_x (1).jpg",
      name: "Soothing After Sun Balm",
      size: "150ml",
      oldPrice: "",
      newPrice: "$42.00",
    },
    {
      id: 85,
      label: "",
      imgSrc: "../img/Product1/80050679_original_original_x.jpg",
      name: "Refreshing After Sun Gel",
      size: "150ml",
      oldPrice: "",
      newPrice: "$42.00",
    },
    {
      id: 86,
      label: "",
      imgSrc: "../img/Product1/80061424_original_original_x.jpg",
      name: "SOS Sunburn Soother Mask",
      size: "100ml",
      oldPrice: "",
      newPrice: "$40.00",
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
            src="/IMG/plpheader-Sun-AfterSun-desktop.jpg"
            alt="After Sun"
            className="container-image"
          />
          <h1 className="container-title">After Sun</h1>
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
              question: "Why is after-sun care important for your skin?",
              answer:
                "After-sun care is crucial to soothe and repair your skin after exposure to UV rays. It helps reduce redness, cools the skin, and replenishes moisture lost during sun exposure. Using after-sun products can also reduce the risk of peeling and irritation, promoting skin healing and keeping it soft and hydrated.",
            },
            {
              question:
                "At what age should you start using after-sun products?",
              answer:
                "You can start using after-sun products at any age, especially after prolonged sun exposure. However, it is essential to incorporate them into your routine as early as possible to prevent skin damage. From childhood to adulthood, applying soothing and hydrating after-sun products can help maintain healthy, youthful skin.",
            },
            {
              question: "What makes Clarins after-sun products special?",
              answer:
                "Clarins after-sun products are formulated with natural plant extracts that help calm and hydrate the skin. These gentle yet effective formulas provide cooling relief, repair sun-damaged skin, and restore moisture balance. They are designed to enhance your skin’s natural healing process while offering a refreshing, non-greasy texture.",
            },
            {
              question: "Why is after-sun care vital after the age of 50?",
              answer:
                "As skin ages, it becomes more vulnerable to sun damage and slower to recover. After-sun care is especially important after 50 to repair and nourish skin that may be thinner or more sensitive. Clarins after-sun products are enriched with organic plant-based ingredients that soothe, hydrate, and support skin regeneration, helping to preserve a youthful glow and prevent further aging signs.",
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

export default AfterSun;
