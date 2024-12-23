import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function Mascaras() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 139,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80099349_original_original_1.jpg",
      name: "Wonder Volume Mascara XXL",
      size: "8ml",
      oldPrice: "",
      newPrice: "$39.00",
    },
    {
      id: 140,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80112881_original_original_1.jpg",
      name: "Wonder Volume Mascara XXL",
      size: "3ml",
      oldPrice: "",
      newPrice: "$16.00",
    },
    {
      id: 141,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112644_original_original_1.webp",
      name: "Mascara Supra Volume Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$41.00",
    },
    {
      id: 142,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112645_original_original_1.jpg",
      name: "4D Mascara Collection",
      size: "Unit",
      oldPrice: "$103.00",
      newPrice: "$83.00",
    },
    {
      id: 143,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112647_original_original_1 (1).jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "$44.00",
      newPrice: "$39.00",
    },
    {
      id: 144,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112648_original_original_1.webp",
      name: "Holiday Mascara Set",
      size: "Unit",
      oldPrice: "$49.00",
      newPrice: "$39.00",
    },
    {
      id: 145,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80088551_original_original_1.webp",
      name: "SOS Lashes Serum Mascara",
      size: "8ml",
      oldPrice: "",
      newPrice: "$42.00",
    },
    {
      id: 146,
      label: "",
      imgSrc: "../img/Product1/80088557_original_original_1.jpg",
      name: "Lash & Brow Double Fix' Mascara",
      size: "8ml",
      oldPrice: "",
      newPrice: "$39.00",
    },
    {
      id: 147,
      label: "",
      imgSrc: "../img/Product1/80080009_original_original_1.webp",
      name: "Lift & Curl Mascara",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10",
    },
    {
      id: 148,
      label: "",
      imgSrc: "../img/Product1/80051985_original_original_1.jpg",
      name: "Supra Volume Mascara",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10",
    },
    {
      id: 149,
      label: "",
      imgSrc: "../img/Product1/80060768_original_original_x.jpg",
      name: "Wonder Perfect Mascara 4D Waterproof",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10",
    },
    {
      id: 150,
      label: "",
      imgSrc: "../img/Product1/80044967_original_original_1.webp",
      name: "Wonder Perfect Mascara 4D",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10",
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
        <img src="/IMG/masca.jpg" alt="Mascaras" className="container-image" />
        <h1 className="container-title">Mascaras</h1>
        <p className="container-description">
          Find the perfect mascara for voluminous, long lashes.
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
              question: "Why is mascara an essential part of makeup?",
              answer:
                "Mascara is essential for enhancing the lashes, making them appear fuller, longer, and more defined. It opens up the eyes, giving them a wide, awake look and completing your makeup. Whether you want to create a natural or dramatic effect, mascara adds volume and length to lashes, making it a must-have product in any beauty routine.",
            },
            {
              question:
                "What’s the best way to apply mascara for voluminous, long-lasting lashes?",
              answer:
                "For voluminous, long-lasting lashes, start by curling your lashes to give them lift. Apply mascara from the base of the lashes, wiggling the brush to coat each lash evenly. For added volume, apply a second coat while the first layer is still slightly wet. Make sure to use a waterproof formula for all-day wear, and avoid clumping by removing excess product from the wand before application.",
            },
            {
              question: "What makes Clarins mascaras stand out from the rest?",
              answer:
                "Clarins mascaras are formulated with nourishing ingredients that condition and strengthen lashes while providing rich color and long-lasting volume. Their unique brushes are designed to ensure even application, adding definition without clumping. Available in a variety of formulas, Clarins mascaras offer both dramatic volume and natural-looking results, all while enhancing lash health and softness.",
            },
            {
              question:
                "How can mascara enhance your look after the age of 50?",
              answer:
                "As we age, lashes can become thinner and shorter, making mascara especially important to define and lift the eyes. Clarins mascaras are formulated to be gentle on mature lashes, providing both volume and definition without clumping or flaking. Whether you prefer a subtle or bold lash look, mascara helps rejuvenate the eyes, making them appear larger and more youthful.",
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

export default Mascaras;
