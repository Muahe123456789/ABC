import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function Eyeliners() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 130,
      label: "",
      imgSrc: "../img/Product1/80026978_original_original_1.webp",
      name: "Graphik Ink Liner",
      size: "0.4ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 131,
      label: "",
      imgSrc: "../img/Product1/0421721_original_original_1.webp",
      name: "3-Dot Liner",
      size: "0.7ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 132,
      label: "",
      imgSrc: "../img/Product1/80044965_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 133,
      label: "",
      imgSrc: "../img/Product1/80044964_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 134,
      label: "",
      imgSrc: "../img/Product1/80044966_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 135,
      label: "",
      imgSrc: "../img/Product1/80044966_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 136,
      label: "",
      imgSrc: "../img/Product1/80044963_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 137,
      label: "",
      imgSrc: "../img/Product1/80044962_original_original_1.jpg",
      name: "Waterproof Eye Pencil",
      size: "0.29ml",
      oldPrice: "",
      newPrice: "$37.00",
    },
    {
      id: 138,
      label: "NEW",
      imgSrc: "../img/Product1/04223310_original_original_1.jpg",
      name: "Khôl Eye Pencil",
      size: "1.05 g",
      oldPrice: "",
      newPrice: "$35.00",
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
        <img src="/IMG/Eyeli.jpg" alt="Eyeliners" className="container-image" />
        <h1 className="container-title">Eyeliners</h1>
        <p className="container-description">
          Find the perfect eyeliner for bold, defined eyes.
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
              question: "Why is eyeliner an essential part of makeup?",
              answer:
                "Eyeliner defines and accentuates the eyes, helping to create a variety of looks from subtle to dramatic. It adds depth and shape to the eyes, making them appear larger and more defined. Whether you prefer a winged look, a tight line, or a smudged, smoky effect, eyeliner is key to enhancing your eye makeup and overall appearance.",
            },
            {
              question:
                "What’s the best way to apply eyeliner for a precise and long-lasting look?",
              answer:
                "For a precise eyeliner application, start with a steady hand and use a pencil, gel, or liquid liner that suits your desired look. Begin at the inner corner of your eye and work outward, following the natural line of your lash line. To ensure long-lasting wear, use an eye primer beforehand, and set with eyeshadow for a smudge-proof finish. For a softer look, blend with a brush or cotton swab.",
            },
            {
              question: "What makes Clarins eyeliners stand out from the rest?",
              answer:
                "Clarins eyeliners are known for their smooth, creamy texture that glides on effortlessly, offering intense color payoff with minimal effort. Infused with nourishing ingredients, these eyeliners are gentle on the delicate skin around the eyes. They are long-wearing, smudge-proof, and available in a variety of shades, ensuring that you can create any look, from subtle definition to bold statement lines.",
            },
            {
              question:
                "How can eyeliner enhance your look after the age of 50?",
              answer:
                "As we age, eyeliner can help define the eyes, making them appear larger and more youthful. Clarins eyeliners are specially formulated to be gentle on mature skin, preventing tugging or irritation. Whether you choose a soft line for a natural look or a more defined wing for a dramatic effect, eyeliner can accentuate the eyes without settling into fine lines, giving your eyes a refreshed, youthful appearance.",
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

export default Eyeliners;
