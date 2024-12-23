import React, { useState } from "react";
import "./Just Arrived.css";
import { Link } from "react-router-dom";

function Serums() {
  const [openIndex, setOpenIndex] = useState(null); // Manage the state of the open question

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for FAQ
  };

  const products = [
    {
      id: 49,
      label: "NEW",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "$157.00",
      newPrice: "$141.30",
    },
    {
      id: 50,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Lunar New Year Edition",
      size: "75ml",
      oldPrice: "",
      newPrice: "$204.00",
    },
    {
      id: 51,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "$142.00",
      newPrice: "$127.80",
    },
    {
      id: 52,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112630_original_original_1.webp",
      name: "One-Step Gentle Exfoliating Cleanser",
      size: "Unit",
      oldPrice: "",
      newPrice: "$216.00",
    },
    {
      id: 53,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112622_original_original_1.webp",
      name: "Double Serum & Extra-Firming Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$159.00",
    },
    {
      id: 54,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112619_original_original_1.webp",
      name: "Double Serum & Multi-Active Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$159.00",
    },
    {
      id: 55,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112628_original_original_1.webp",
      name: "Double Serum Luminosity Trio",
      size: "Unit",
      oldPrice: "",
      newPrice: "$159.00",
    },
    {
      id: 56,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112627_original_original_1.webp",
      name: "Double Serum & Nutri-Lumière Collection",
      size: "Unit",
      oldPrice: "",
      newPrice: "$159.00",
    },
    {
      id: 57,
      label: "",
      imgSrc: "../img/Product1/80092151_original_original_1.webp",
      name: "Hydra-Essentiel Bi-phase Serum",
      size: "30ml",
      oldPrice: "$68.00",
      newPrice: "$61.20",
    },
    {
      id: 58,
      label: "LUXURY SIZE",
      imgSrc: "../img/Product1/80084964_original_original_A.webp",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "50ml",
      oldPrice: "$132.00",
      newPrice: "$118.80",
    },
    {
      id: 59,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80084964_original_original_1.jpg",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "30ml",
      oldPrice: "$100.00",
      newPrice: "$90.00",
    },
    {
      id: 60,
      label: "",
      imgSrc: "../img/Product1/80090396_original_original_X.jpg",
      name: "Bright Plus Fresh Ampoule",
      size: "8ml",
      oldPrice: "$44.00",
      newPrice: "$39.60",
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
            src="/IMG/PLP-Header_Desktop_DOUBLE-SERUM_2024.png"
            alt="Serums"
            className="container-image"
          />
          <h1 className="container-title">Serums</h1>
          <p className="container-description">
          "Serums target skin concerns, providing nourishment to smooth, firm."
          </p>
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
                        {product.oldPrice && <del className="old-price">{`$${product.oldPrice.toFixed(2)}`}</del>}
                        <p className="new-price">{`$${product.newPrice.toFixed(2)}`}</p>
                      </div>
                    </article>
                  ))}
                </main>
      </div>

      <div className="faq-container">
        <h2>Any questions?</h2>
        <p>Our experts have the answer</p>

        {[
          {
            question: "What is a serum?",
            answer:
              "Serums are lightweight, fast-absorbing liquids that contain a higher concentration of active ingredients than moisturizers, targeting specific skin concerns like wrinkles, acne, or dullness.",
          },
          {
            question: "When should I apply serum in my routine?",
            answer:
              "Serums should be applied after cleansing and toning, but before moisturizing. They are designed to penetrate deeply into the skin, delivering active ingredients where they are most needed.",
          },
          {
            question: "How do I choose the right serum for my skin?",
            answer:
              "Choosing the right serum depends on your skin type and concerns. If you want to target wrinkles, look for anti-aging serums. For dry skin, choose hydrating serums. Always consider your specific needs and consult a dermatologist if you're unsure.",
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
  );
}

export default Serums;
