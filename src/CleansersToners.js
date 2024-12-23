import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Just Arrived.css";
import "./CleansersToners.css";

function CleansersToners() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const products = [
    {
      id: 37,
      label: "NEW",
      imgSrc: "../img/Product1/80104492_original_original_1.webp",
      name: "Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin",
      size: "125ml",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 38,
      label: "NEW",
      imgSrc: "../img/Product1/80104490_original_original_1.webp",
      name: "Soothing Gentle Foaming Face Cleanser for Dry Skin",
      size: "125ml",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 39,
      label: "NEW",
      imgSrc: "../img/Product1/80104509_original_original_1.webp",
      name: "One-Step Gentle Exfoliating Cleanser",
      size: "50ml",
      oldPrice: "$20.00",
      newPrice: "$15.00",
    },
    {
      id: 40,
      label: "NEW",
      imgSrc: "../img/Product1/80105707_original_original_1.webp",
      name: "Gentle Renewing Cleansing Mousse",
      size: "150ml",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 41,
      label: "NEW",
      imgSrc: "../img/Product1/80082064_original_original_1.webp",
      name: "One-Step Facial Cleanser with Orange Extract",
      size: "200ml",
      oldPrice: "",
      newPrice: "$45.00",
    },
    {
      id: 42,
      label: "NEW",
      imgSrc: "../img/Product1/80104513_original_original_1.webp",
      name: "Purifying Toning Lotion",
      size: "200ml",
      oldPrice: "",
      newPrice: "$45.00",
    },
    {
      id: 43,
      label: "NEW",
      imgSrc: "../img/Product1/80102469_original_original_1.jpg",
      name: "Precious La Mousse Foaming Face Cleanser",
      size: "125ml",
      oldPrice: "",
      newPrice: "$130.00",
    },
    {
      id: 44,
      label: "NEW",
      imgSrc: "../img/Product1/80104514_original_original_1.webp",
      name: "Soothing Toning Lotion",
      size: "200ml",
      oldPrice: "",
      newPrice: "$45.00",
    },
    {
      id: 45,
      label: "NEW",
      imgSrc: "../img/Product1/80087951_original_original_1.webp",
      name: "Precious La Lotion Age-Defying Treatment Essence",
      size: "150ml",
      oldPrice: "$144.00",
      newPrice: "$160.70",
    },
    {
      id: 46,
      label: "",
      imgSrc: "../img/Product1/80083073_original_original_X.jpg",
      name: "Multi-Intensive Smoothing Treatment Essence",
      size: "200ml",
      oldPrice: "$82.00",
      newPrice: "$73.80",
    },
    {
      id: 47,
      label: "",
      imgSrc: "../img/Product1/80083072_original_original_X.jpg",
      name: "Extra-Firming Firming Essence",
      size: "200ml",
      oldPrice: "",
      newPrice: "$72.00",
    },
    {
      id: 48,
      label: "",
      imgSrc: "../img/Product1/80083071_original_original_X.jpg",
      name: "Multi-Active Revitalizing Essence",
      size: "200ml",
      oldPrice: "$62.00",
      newPrice: "$55.80",
    },
  ];

  // Xử lý sản phẩm: chuyển đổi giá trị oldPrice và newPrice thành số
  const processedProducts = products.map((product) => ({
    ...product,
    oldPrice: product.oldPrice ? parseFloat(product.oldPrice.replace("$", "")) : null,
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
      src="/IMG/plpheader-Face-CleansersToners-desktop.jpg"
      alt="Cleansers & Toners"
      className="container-image"
    />
    <h1 className="container-title">Cleansers & Toners</h1>
    <p className="container-description">
      Discover Cleansers & Toners – perfect skin care, deep cleansing and moisturizing for smooth, fresh skin every day.
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
            question: "What does a toner do?",
            answer:
              "We can never talk enough about the benefits of toners! They are the first beauty step after cleansing and makeup removal. A few seconds of application is enough to help the skin get the most out of your regular care products. Apply with one or two cotton pads, avoiding the eye contour area, or lightly tap with the fingertips after cleansing with a Cleansing Milk or a waterproof makeup remover. A very simple gesture that optimizes the effectiveness of the serum, face oil or moisturizing cream applied afterwards. The first treatment before your treatment!",
          },
          {
            question:
              "At what age should you start applying a toning lotion?",
            answer:
              "There is no minimum age to start doing your skin good! Clarins has created My Clarins, the first vegan line of products full of plant- and fruit-based ingredients, to achieve perfectly healthy skin! Cleanse your face with the Re-move Micellar Cleansing Milk.",
          },
          {
            question: "Why use a Clarins toning lotion?",
            answer:
              "Used and recommended by beauty consultants in Clarins Spas, alcohol-free toning lotions are an intermediate beauty step before applying a facial treatment. Their floral freshness and natural, delicate scent create an exquisite sensory experience. The skin is refreshed, smoothed and relaxed, ready to absorb the appropriate treatment or serum. The Hydrating Toning Lotion moisturizes and tones normal to dry skin. The Purifying Toning Lotion tightens pores and nourishes combination to oily skin with its purifying and toning action. The Soothing Toning Lotion soothes and comforts sensitive skin. Ideal to partner with your makeup remover, the toning lotion gently cleanses, soothes, tones and promotes the balance and purity of the skin. A little boost before your treatment!",
          },
          {
            question:
              "Why choose a suitable toning lotion after the age of 50?",
            answer:
              "Experts in anti-aging and anti-wrinkle skincare, Clarins Laboratories have developed a wide range of lotions for all skin types and age-related needs. Some expert treatments ranges have their own adapted lotion to offer a complete and optimal skincare routine. The Super Restorative skincare range is enriched with its Treatment Essence. Its organic Harungana-based formula helps to smooth and reshape the skin. In one step, your skin is rejuvenated in complete peace of mind!",
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

export default CleansersToners;
