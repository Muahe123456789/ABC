import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function SelfTanning() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 87,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "",
      newPrice: "$38.00",
    },
    {
      id: 88,
      label: "",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster for Body",
      size: "30ml",
      oldPrice: "",
      newPrice: "$52.00",
    },
    {
      id: 89,
      label: "",
      imgSrc: "../img/Product1/80074502_original_original_1.jpg",
      name: "Self Tanning Milky Lotion",
      size: "125ml",
      oldPrice: "45.00",
      newPrice: "$40.50",
    },
    {
      id: 90,
      label: "",
      imgSrc: "../img/Product1/80074503_original_original_A.jpg",
      name: "Self Tanning Instant Gel",
      size: "125ml",
      oldPrice: "$45.00",
      newPrice: "$40.50",
    },
    {
      id: 91,
      label: "",
      imgSrc: "../img/Product1/80033778_original_original_1.jpg",
      name: "Self-Tanner Body Applicator Mitt",
      size: "1 Item",
      oldPrice: "",
      newPrice: "$13.00",
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
            src="/IMG/plpheader-Sun-SelfTanning-desktop.jpg"
            alt="Self Tanning Lotions for the Face and Body"
            className="container-image"
          />
          <h1 className="container-title">
            Self Tanning Lotions for the Face and Body
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
              question:
                "Why is self-tanning a good alternative to sun exposure?",
              answer:
                "Self-tanning provides a safe way to achieve a sun-kissed glow without the harmful effects of UV rays. It helps reduce the risk of skin damage, premature aging, and skin cancer associated with prolonged sun exposure. Using self-tanning products allows you to enjoy a tan without putting your skin at risk of sunburns or long-term damage.",
            },
            {
              question:
                "At what age should you start using self-tanning products?",
              answer:
                "There is no specific age to start using self-tanning products, but it's important to ensure the skin is properly cared for before application. Young adults and older individuals alike can enjoy the benefits of self-tanning, but it is essential to follow the instructions carefully to avoid streaks or uneven color.",
            },
            {
              question: "What makes Clarins self-tanning products special?",
              answer:
                "Clarins self-tanning products are known for their natural-looking results and skin-nourishing formulas. Infused with plant-based ingredients, these products hydrate and protect your skin while giving it a streak-free, sun-kissed glow. The lightweight, non-greasy textures make application easy, and the gradual tan ensures a radiant finish without the harsh chemicals found in some other tanning products.",
            },
            {
              question:
                "Why is self-tanning beneficial for your skin after the age of 50?",
              answer:
                "After the age of 50, skin becomes more sensitive and prone to damage from the sun. Self-tanning offers a safer way to achieve a healthy glow without the need for sun exposure, which can exacerbate wrinkles and age spots. Clarins self-tanning products are formulated with ingredients that hydrate and soothe mature skin, providing a youthful and even tan without the risks associated with traditional tanning methods.",
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

export default SelfTanning;
