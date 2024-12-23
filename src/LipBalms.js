import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function LipBalms() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 174,
      label: "",
      imgSrc: "../img/Product1/80106560_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 175,
      label: "",
      imgSrc: "../img/Product1/80106557_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 176,
      label: "",
      imgSrc: "../img/Product1/80106562_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 177,
      label: "",
      imgSrc: "../img/Product1/80106559_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 178,
      label: "",
      imgSrc: "../img/Product1/80106559_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 179,
      label: "",
      imgSrc: "../img/Product1/80106561_original_original_1.jpg",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 180,
      label: "",
      imgSrc: "../img/Product1/80107590_original_original_1.jpg",
      name: "Total Eye Lift - Under Eye Tightening Cream",
      size: "15ml",
      oldPrice: "$105.00",
      newPrice: "$94.50",
    },

    {
      id: 182,
      label: "",
      imgSrc: "../img/Product1/01063100_original_original_X.jpg",
      name: "Extra-Firming Lip & Contour Balm",
      size: "15ml",
      oldPrice: "$56.00",
      newPrice: "$50.40",
    },
    {
      id: 183,
      label: "",
      imgSrc: "../img/Product1/80070833_original_original_1.jpg",
      name: "my SWEETY BALM",
      size: "3,5 g",
      oldPrice: "",
      newPrice: "$15.00",
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
        <img src="/IMG/Lip.jpg" alt="Lip Balms" className="container-image" />
        <h1 className="container-title">Lip Balms</h1>
        <p className="container-description">
          Nourishing lip balms for smooth, hydrated lips all day long.
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
              question: "Why do your lips need special Clarins lip care?",
              answer:
                "The skin on your lips is delicate and more sensitive than other parts of the face. Clarins has developed specific lip care products to preserve their beauty and ensure daily comfort. The Hydra-Essentiel Moisture Replenishing Lip Balm, enriched with blue lotus wax and cocoa, nourishes and repairs dry, damaged lips, protecting them from external aggressions. For targeted care around the lip contour, the Extra-Firming Lip & Contour Balm fights the signs of aging, visibly smoothing and plumping the lips and surrounding area with shea butter and raspberry oil.",
            },
            {
              question:
                "How do Clarins lip balms provide essential care for your lips?",
              answer:
                "Clarins lip balms are crafted with nourishing ingredients to offer your lips the hydration and protection they need. The Hydra-Essentiel Moisture Replenishing Lip Balm replenishes moisture and repairs dry lips, while the Extra-Firming Lip & Contour Balm targets signs of aging by visibly smoothing and plumping the lips. Both products use rich, plant-based ingredients like shea butter and cocoa to keep your lips soft, smooth, and youthful-looking.",
            },
            {
              question: "What makes Clarins lip balms different from others?",
              answer:
                "Clarins lip balms stand out because they combine effective hydration with luxurious, nourishing ingredients. Made with 100% plant-based formulas, these balms provide long-lasting moisture and repair. Whether you're looking to hydrate, firm, or smooth the lips, Clarins products are designed to address various lip concerns with the added benefits of natural oils, making them not only effective but also gentle on the delicate skin of your lips.",
            },
            {
              question: "How often should I use Clarins lip balms?",
              answer:
                "For best results, Clarins lip balms should be used regularly throughout the day, especially during colder months or when your lips are feeling dry. Apply them as needed for comfort and hydration, and before applying any lip makeup to ensure a smooth, nourished base. For targeted care, use the Extra-Firming Lip & Contour Balm daily to smooth and firm the lip contour for a more youthful appearance.",
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

export default LipBalms;
