import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./CleansersToners.css";

function LipOils() {
  const [openIndex, setOpenIndex] = useState(null); // Quản lý trạng thái mở câu hỏi

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Đóng mở câu hỏi theo index
  };

  const products = [
    {
      id: 151,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80084589_original_original_1.webp",
      name: "Lip Comfort Oil - Tinted Lip Oil",
      size: "7ml",
      oldPrice: "$40.00",
      newPrice: "$36.00",
    },
    {
      id: 152,
      label: "",
      imgSrc: "../img/Product1/80105092_original_original_1.webp",
      name: "Lip Comfort Oil - Power of colours",
      size: "7ml",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 153,
      label: "NEW",
      imgSrc: "../img/Product1/80107192_original_original_1.webp",
      name: "Lip Comfort Oil - Black & White Edition",
      size: "7ml",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 154,
      label: "",
      imgSrc: "../img/Product1/80106558_original_original_1.webp",
      name: "Lip Oil Balm Hydrating Peptide Balm",
      size: "2.9 g",
      oldPrice: "$40.00",
      newPrice: "$36.00",
    },
    {
      id: 155,
      label: "",
      imgSrc: "../img/Product1/80074351_original_original_1.jpg",
      name: "Lip Comfort Oil Shimmer",
      size: "7ml",
      oldPrice: "",
      newPrice: "$40.00",
    },
    {
      id: 156,
      label: "",
      imgSrc: "../img/Product1/80060075_original_original_1.jpg",
      name: "Intense Lip Comfort Oil",
      size: "7ml",
      oldPrice: "",
      newPrice: "$38.00",
    },
    {
      id: 157,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112650_original_original_1.jpg",
      name: "12-Day Advent Calendar",
      size: "Unit",
      oldPrice: "$251.00",
      newPrice: "$135.00",
    },
    {
      id: 158,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112649_original_original_1.webp",
      name: "Radiant Lips Collection",
      size: "Unit",
      oldPrice: "$160.00",
      newPrice: "$140.00",
    },
    {
      id: 159,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80116648_original_original_1.webp",
      name: "Beautiful Lips Collection – Red Edition",
      size: "1 item",
      oldPrice: "",
      newPrice: "$42.00",
    },
    {
      id: 160,
      label: "",
      imgSrc: "../img/Product1/80109498_original_original_1.webp",
      name: "Clarins Icons Collection",
      size: "Unit",
      oldPrice: "$154.00",
      newPrice: "$131.00",
    },
    {
      id: 161,
      label: "",
      imgSrc: "../img/Product1/80109499_original_original_1.webp",
      name: "Iconic Lip Oils Collection",
      size: "Unit",
      oldPrice: "$96.00",
      newPrice: "$82.00",
    },
    {
      id: 162,
      label: "",
      imgSrc: "../img/Product1/80112882_original_original_1.webp",
      name: "SLip Comfort Oil Duo",
      size: "2 x 1,4 ml",
      oldPrice: "",
      newPrice: "$21.00",
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
          src="/IMG/LipOils.webp"
          alt="Tinted Lip Oils"
          className="container-image"
        />
        <h1 className="container-title">Tinted Lip Oils</h1>
        <p className="container-description">
          Add a pop of color and hydration to your lips with our tinted lip
          oils.
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
                       {product.oldPrice && <del className="old-price">{`$${product.oldPrice.toFixed(2)}`}</del>}
                       <p className="new-price">{`$${product.newPrice.toFixed(2)}`}</p>
                     </div>
                   </article>
                 ))}
               </main>
      </div>

      <div className="just-arrived-container">
        <div className="faq-container">
          <h2>Explore the best hydrating lip oils</h2>

          {[
            {
              question: "What makes Lip Comfort Oil a next-generation gloss?",
              answer:
                "Lip Comfort Oil is a revolutionary beauty oil for the lips that combines the nourishing benefits of oils with the colored pigments of a gloss. It provides ultra-lightweight comfort while hydrating, protecting, and adding natural, shimmering color to the lips. The formula is enriched with Hazelnut Oil and Organic Jojoba Oil, making it the ultimate lip care product that gives a glossy finish while soothing and hydrating lips.",
            },
            {
              question: "Why is Lip Comfort Oil essential for lip care?",
              answer:
                "The delicate skin on the lips is exposed to harsh weather, pollution, and dryness, making it important to nourish and protect the lips. Lip Comfort Oil offers comprehensive care by combining oils with colored pigments, delivering hydration, comfort, and a plumping effect. It’s designed to maintain soft, healthy lips throughout the day, while providing a glossy, shimmering color with a tangy or bold scent.",
            },
            {
              question: "What are the key ingredients in Lip Comfort Oil?",
              answer:
                "Lip Comfort Oil contains a nourishing blend of Hazelnut Oil, Organic Jojoba Oil, and a third plant-based oil that varies by shade. This 100% plant-based trio, formulated with 93% natural ingredients, provides all-day hydration, plumps the lips, and delivers a luxurious shine. These ingredients work together to nourish, comfort, and protect the lips, leaving them soft and supple.",
            },
            {
              question:
                "What are the different versions of Lip Comfort Oil and how do they differ?",
              answer:
                "Lip Comfort Oil is available in three versions: translucent, intense, and holistic. The translucent version offers sweet, pastel, and fruity shades with a glossy shimmer, ideal for a fresh, summery look. The intense version provides an opaque, seductive, mirror-shine effect with bold colors like red, burgundy, and fuchsia. The holistic version incorporates mood-boosting essential oils to invigorate, soothe, relax, or uplift, depending on your mood. Each version offers a unique lip experience while nourishing and hydrating the lips.",
            },
            {
              question:
                "How can Lip Comfort Oil be used to enhance your makeup?",
              answer:
                "Lip Comfort Oil can be worn alone for a natural, glossy finish or applied over a Clarins Joli Rouge lipstick for a chic, glossy effect. It pampers the lips with a burst of color and hydration, giving your lips a smooth, plump look that lasts all day. Whether you prefer a subtle shimmer or bold, intense shine, Lip Comfort Oil is the perfect lip care and makeup product for every occasion.",
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

export default LipOils;
