import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function EyeShadows() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 119,
      label: "",
      imgSrc: "../img/Product1/80106693_original_original_1.jpg",
      name: "Ombre 4 Couleurs Eyeshadow Palette",
      size: "4.2 g",
      oldPrice: "",
      newPrice: "$49.00",
    },
    {
      id: 120,
      label: "",
      imgSrc: "../img/Product1/80099355_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 121,
      label: "",
      imgSrc: "../img/Product1/80099359_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 122,
      label: "",
      imgSrc: "../img/Product1/80099356_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 123,
      label: "",
      imgSrc: "../img/Product1/80099360_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 124,
      label: "",
      imgSrc: "../img/Product1/80099357_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 125,
      label: "",
      imgSrc: "../img/Product1/80106696_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 126,
      label: "",
      imgSrc: "../img/Product1/80099358_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 127,
      label: "",
      imgSrc: "../img/Product1/80106698_original_original_1.jpg",
      name: "Ombre Skin Eyeshadow",
      size: "1.5 g",
      oldPrice: "",
      newPrice: "$30.00",
    },
    {
      id: 128,
      label: "",
      imgSrc: "../img/Product1/80038818_original_original_1.jpg",
      name: "Blending Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 129,
      label: "",
      imgSrc: "../img/Product1/80038819_original_original_1.webp",
      name: "Eyeshadow Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: "$28.00",
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
      <div className="containerjust">
        <img
          src="/IMG/plpheader-EyeShadow-desktop.jpg"
          alt="Eye Shadows"
          className="container-image"
        />
        <h1 className="container-title">Eye Shadows</h1>
        <p className="container-description">
          Explore a wide range of eye shadows for every occasion.
        </p>
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
              question: "Why is eye shadow an essential part of makeup?",
              answer:
                "Eye shadow enhances the eyes by adding color, depth, and dimension, allowing you to create a wide variety of looks, from natural to bold. It can make your eyes appear larger, more defined, and expressive. The right eye shadow can complement your overall makeup look and highlight your eye color, making it an essential product in any makeup routine.",
            },
            {
              question:
                "What is the best way to apply eye shadow for a long-lasting effect?",
              answer:
                "To ensure your eye shadow lasts all day, start with an eye primer to create a smooth base and prevent creasing. Use high-quality brushes to apply your shadow, layering light to dark shades for dimension. Set your look with a setting spray to lock everything in place for a fresh, long-lasting finish. Always blend well to avoid harsh lines and achieve a seamless look.",
            },
            {
              question: "What makes Clarins eye shadow products special?",
              answer:
                "Clarins eye shadow products are known for their high-quality, plant-based formulas that provide rich, vibrant colors while nourishing and protecting the delicate skin around the eyes. With a smooth, blendable texture, these eye shadows deliver long-lasting wear and are designed to enhance the natural beauty of your eyes. They come in a range of stunning shades, from neutral tones to bold, striking colors, giving you versatility for any occasion.",
            },
            {
              question:
                "How can eye shadow enhance your look after the age of 50?",
              answer:
                "As we age, eye makeup can help accentuate the eyes and restore brightness to the face. Eye shadow after 50 can add depth and definition, making the eyes appear larger and more awake. Clarins eye shadow products are formulated to be gentle on mature skin, offering smooth application and buildable coverage to enhance your eyes without settling into fine lines, giving you a youthful and refreshed look.",
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

export default EyeShadows;
