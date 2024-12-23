import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function LipGlosse() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 163,
      label: "",
      imgSrc: "../img/Product1/80106558_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2,9 g",
      oldPrice: "$40.00",
      newPrice: "$36.00",
    },
    {
      id: 164,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80114832_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 165,
      label: "NEW",
      imgSrc: "../img/Product1/80098702_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 166,
      label: "",
      imgSrc: "../img/Product1/80098704_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 167,
      label: "",
      imgSrc: "../img/Product1/80098705_original_original_X.jpg",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 168,
      label: "",
      imgSrc: "../img/Product1/80098707_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 169,
      label: "",
      imgSrc: "../img/Product1/80114808_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 170,
      label: "",
      imgSrc: "../img/Product1/80114815_original_original_X.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 171,
      label: "",
      imgSrc: "../img/Product1/80114823_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 172,
      label: "",
      imgSrc: "../img/Product1/80114821_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id: 173,
      label: "",
      imgSrc: "../img/Product1/80062529_original_original_1.webp",
      name: "Lip Perfector Glow",
      size: "12ml",
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
          src="/IMG/LipGloss.jpg"
          alt="Lip Glosses"
          className="container-image"
        />
        <h1 className="container-title">Lip Glosses</h1>
        <p className="container-description">
          Shiny, hydrating lip glosses for a glossy finish and smooth lips.
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
              question: "How do Clarins glosses take care of your lips?",
              answer:
                "Clarins glosses are designed to care for your lips while adding beautiful shine and color. Exfoliating your lips once or twice a week with the Comfort Scrub treatment enhances the gloss effect by removing dead skin and leaving your lips looking smooth and perfected. Clarins glosses, like the Lip Perfector range, are infused with shea butter for ultra-moisturization and plumping, giving your lips a glossy, sensual finish. Choose from a range of shades to complement your look, whether worn alone or over a Clarins Joli Rouge lipstick.",
            },
            {
              question:
                "Which gloss should I choose for a pop of shine and color?",
              answer:
                "For a burst of shine and color, the Lip Milky Mousse is perfect. Its whipped cream texture with peach milk provides moisture and nourishment, leaving a satiny finish with soft, delectable shades like raspberry red or rosewood. This new-generation gloss offers long-wearing tint pigments that infuse your lips with irresistible color and a touch of peach-soft radiance, making your lips look lavishly beautiful.",
            },
            {
              question: "How do I choose the right gloss for my lips?",
              answer:
                "Choosing the right gloss depends on your skin tone, age, and the look you want to achieve. Clarins offers a range of glosses that cater to different needs: from a plumping gloss with a shiny finish to a more subtle, natural enhancement. The Lip Comfort Oil, available in subtly colored or intense shades, is a non-sticky, thin gloss that provides comfort and shine. To find the perfect gloss for your complexion and desires, the Lipstick Finder can guide you to the best match for your skin tone and style.",
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

export default LipGlosse;
