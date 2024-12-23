import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function Shave() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 97,
      label: "",
      imgSrc: "../img/Product1/80092563_original_original_X.jpg",
      name: "ClarinsMen Shave + Beard Oil",
      size: "30ml",
      oldPrice: "$36.00",
      newPrice: "$32.40",
    },
    {
      id: 98,
      label: "",
      imgSrc: "../img/Product1/80092561_original_original_X.jpg",
      name: "ClarinsMen After Shave Soothing Toner",
      size: "100ml",
      oldPrice: "$36.00",
      newPrice: "$32.40",
    },
    {
      id: 99,
      label: "",
      imgSrc: "../img/Product1/80092562_original_original_X.webp",
      name: "ClarinsMen After Shave Soothing Gel",
      size: "75ml",
      oldPrice: "$36.00",
      newPrice: "$32.40",
    },
    {
      id: 100,
      label: "",
      imgSrc: "../img/Product1/80095098_original_original_X.jpg",
      name: "ClarinsMen Smooth Shave Foaming Gel",
      size: "150ml",
      oldPrice: "",
      newPrice: "$26.00",
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
            src="/IMG/plpheader-men-shave-desktop.jpg"
            alt="Men's Shaving Oils, Gels & Aftershaves"
            className="container-image"
          />
          <h1 className="container-title">
            Men's Shaving Oils, Gels & Aftershaves
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
              question: "Why is shaving important for your skin?",
              answer:
                "Shaving helps remove unwanted hair, but it also exfoliates the skin, leaving it smoother and promoting cell turnover. It can improve the appearance of your skin by making it feel fresher and more even. Regular shaving with proper technique and care helps prevent ingrown hairs and irritation, ensuring a clean, smooth finish.",
            },
            {
              question: "At what age should you start shaving?",
              answer:
                "Shaving typically begins in the teenage years, when facial or body hair starts to grow. It’s important to start with the right tools and shaving products to ensure a smooth, irritation-free shave. The best time to start shaving is when you feel comfortable and when your skin and hair growth patterns require it.",
            },
            {
              question: "What makes Clarins shaving products special?",
              answer:
                "Clarins shaving products are formulated with nourishing, plant-based ingredients that help protect and soothe the skin during shaving. These products offer a smooth glide, reducing irritation, razor burns, and cuts. Their unique textures hydrate and calm the skin, ensuring a comfortable shave while maintaining skin balance and softness.",
            },
            {
              question:
                "Why is shaving vital for your skin after the age of 50?",
              answer:
                "As the skin matures, it becomes more delicate and may be prone to irritation. Shaving after 50 is especially important to maintain smooth, even skin and prevent the appearance of ingrown hairs. Clarins shaving products are designed to hydrate and soothe mature skin, ensuring a gentle shave that leaves the skin feeling refreshed and well-nourished, reducing any discomfort or dryness.",
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

export default Shave;
