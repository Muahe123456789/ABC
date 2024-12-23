import React, { useState } from "react";
import "./Just Arrived.css";
import "./CleansersToners.css";
import { Link } from "react-router-dom";

function MakeupHighlighters() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 107,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80106218_original_original_1.jpg",
      name: "SOS Color Correcting Face Primer - Gold Glow",
      size: "30ml",
      oldPrice: "",
      newPrice: "$48.00",
    },
    {
      id: 108,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/04700210_original_original_A.jpg",
      name: "Instant Smooth Perfecting Touch",
      size: "15ml",
      oldPrice: "$46.00",
      newPrice: "$41.40",
    },
    {
      id: 109,
      label: "NEW",
      imgSrc: "../img/Product1/80095977_original_original_X.jpg",
      name: "SOS Color Correcting Face Primer - Matifying",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: "$43.20",
    },
    {
      id: 110,
      label: "",
      imgSrc: "../img/Product1/80095975_original_original_X.webp",
      name: "SOS Color Correcting Face Primer - Imperfections",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: "$43.20",
    },
    {
      id: 111,
      label: "NEW",
      imgSrc: "../img/Product1/80095976_original_original_X.jpg",
      name: "SOS Color Correcting Face Primer - Redness",
      size: "30ml",
      oldPrice: "$48.00",
      newPrice: "$43.20",
    },
    {
      id: 112,
      label: "",
      imgSrc: "../img/Product1/80043392_original_original_x.jpg",
      name: "My Clarins PORE-LESS Mattifying Pore Eraser",
      size: "3,2ml",
      oldPrice: "",
      newPrice: "$23.00",
    },
    {
      id: 113,
      label: "",
      imgSrc: "../img/Product1/80038815_original_original_1.jpg",
      name: "Flat Foundation Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 114,
      label: "",
      imgSrc: "../img/Product1/80038816_original_original_1.jpg",
      name: "Multi-use Foundation Brush",
      size: "Unit",
      oldPrice: "",
      newPrice: "$41.00",
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
            src="/IMG/plpheader-PrimersHighlighters-desktop.jpg"
            alt="Makeup Primers & Highlighters"
            className="container-image"
          />
          <h1 className="container-title">Makeup Primers & Highlighters</h1>
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
                "Why are primers essential for achieving a flawless makeup look?",
              answer:
                "Primers create a smooth canvas for makeup application by filling in pores, minimizing fine lines, and providing hydration. They help makeup adhere better, last longer, and look more even throughout the day. A good primer ensures that your makeup stays fresh and flawless, enhancing the overall appearance of your skin while offering a base for the rest of your makeup.",
            },
            {
              question:
                "When should you apply primer during your makeup routine?",
              answer:
                "Primer should be applied after skincare and before foundation. It acts as a barrier between your skin and makeup, helping to improve the texture and longevity of your foundation. Wait for your skincare products to absorb into your skin before applying primer for the best results.",
            },
            {
              question: "What makes Clarins primers stand out from others?",
              answer:
                "Clarins primers are known for their lightweight, skin-loving formulas that not only prepare the skin for makeup but also offer skincare benefits. Enriched with natural extracts, these primers hydrate, blur imperfections, and enhance the skin’s radiance. They create a luminous, smooth base, ensuring that makeup applies beautifully and stays in place all day.",
            },
            {
              question: "How can highlighters elevate your makeup look?",
              answer:
                "Highlighters add dimension and glow to your complexion by accentuating the high points of your face, such as the cheekbones, brow bones, and cupid’s bow. They create a radiant, youthful appearance by reflecting light and giving your skin a fresh, dewy finish. Whether for an everyday glow or a dramatic shine, highlighters are key to adding that extra touch of luminosity to your makeup look.",
            },
            {
              question: "What makes Clarins highlighters unique?",
              answer:
                "Clarins highlighters are formulated to provide a natural, radiant glow without the heavy, glittery finish. Made with plant-based ingredients, they enhance your skin’s natural luminosity while nourishing and hydrating. These highlighters blend seamlessly into the skin, offering a buildable, soft-focus effect that leaves you with a beautiful, lit-from-within glow.",
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

export default MakeupHighlighters;
