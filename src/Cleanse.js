import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function Cleanse() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 92,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112641_original_original_1.webp",
      name: "ClarinsMen Hydration Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$79.00",
    },
    {
      id: 93,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112640_original_original_1.webp",
      name: "ClarinsMen Energizing Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 94,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112642_original_original_1.webp",
      name: "ClarinsMen Essentials Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "33.00",
    },
    {
      id: 95,
      label: "",
      imgSrc: "../img/Product1/80085975_original_original_x.jpg",
      name: "ClarinsMen Exfoliating Cleanser",
      size: "125ml",
      oldPrice: "",
      newPrice: "$38.00",
    },
    {
      id: 96,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80085184_original_original_1.webp",
      name: "ClarinsMen Active Face Wash",
      size: "125ml",
      oldPrice: "$32.00",
      newPrice: "$28.80",
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
            src="/IMG/plpheader-BodyExfoliators-desktop.jpg"
            alt="Cleanse"
            className="container-image"
          />
          <h1 className="container-title">Cleanse</h1>
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
              question: "Why is cleansing important for your skin?",
              answer:
                "Cleansing is essential to remove dirt, oil, makeup, and environmental pollutants from your skin. It helps maintain clear pores, prevent breakouts, and prepares your skin to absorb other skincare products. Regular cleansing ensures a healthy, balanced complexion and supports the skin's natural renewal process.",
            },
            {
              question: "At what age should you start cleansing your skin?",
              answer:
                "It's important to start cleansing your skin from a young age to develop healthy skincare habits. As soon as your skin starts producing oil, typically during adolescence, daily cleansing becomes crucial to remove impurities and keep the skin clean and fresh. However, it's important to use products that match your skin type for optimal results.",
            },
            {
              question: "What makes Clarins cleansing products special?",
              answer:
                "Clarins cleansing products are formulated with natural plant-based ingredients that are gentle yet effective in removing impurities. These products hydrate and nourish the skin while cleansing, ensuring that your skin remains soft and balanced. Their unique textures and formulations are designed to respect the skin's natural barrier while offering a refreshing cleanse.",
            },
            {
              question:
                "Why is cleansing vital for your skin after the age of 50?",
              answer:
                "As skin matures, it becomes more delicate and prone to dryness. Cleansing after 50 is especially important to remove environmental pollutants and makeup that can cause irritation or dullness. Clarins cleansing products are formulated with gentle ingredients that nourish and protect mature skin, helping maintain hydration and radiance while ensuring a thorough but gentle cleanse.",
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

export default Cleanse;
