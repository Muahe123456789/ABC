import React, { useState } from "react";
import "./Just Arrived.css";
import { Link } from "react-router-dom";

function Bodyfirming() {
  const [openIndex, setOpenIndex] = useState(null); // Manage the state of the open question

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for FAQ
  };

  const products = [
    {
      id: 61,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80102954_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "400ml",
      oldPrice: "$144.00",
      newPrice: "$129.60",
    },
    {
      id: 62,
      label: "",
      imgSrc: "../img/Product1/80102952_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "200ml",
      oldPrice: "$90.00",
      newPrice: "$81.00",
    },
    {
      id: 63,
      label: "",
      imgSrc: "../img/Product1/80093316_original_original_X.jpg",
      name: "Super Restorative Balm For Abdomen and Waist",
      size: "200ml",
      oldPrice: "$104.00",
      newPrice: "$93.60",
    },
    {
      id: 64,
      label: "",
      imgSrc: "../img/Product1/80093314_original_original_X.webp",
      name: "Masvelt Advanced Body Shaping Cream",
      size: "200ml",
      oldPrice: "$72.00",
      newPrice: "$64.80",
    },
    {
      id: 65,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80045944_original_original_1.jpg",
      name: "Body Partner",
      size: "175ml",
      oldPrice: "$64.00",
      newPrice: "$57.60",
    },
    {
      id: 66,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80035093_original_original_X.jpg",
      name: "Renew Plus Body Serum",
      size: "200ml",
      oldPrice: "",
      newPrice: "$78.00",
    },
    {
      id: 67,
      label: "",
      imgSrc: "../img/Product1/80084435_original_original_A.webp",
      name: "Body Firming Extra-Firming Cream",
      size: "200ml",
      oldPrice: "$74.00",
      newPrice: "$66.60",
    },
    {
      id: 68,
      label: "",
      imgSrc: "../img/Product1/80084436_original_original_X.jpg",
      name: "Body Firming Extra-Firming Gel",
      size: "15ml",
      oldPrice: "$64.00",
      newPrice: "$57.60",
    },
    {
      id: 69,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80083866_original_original_A.webp",
      name: "Tonic Body Treatment Oil",
      size: "100ml",
      oldPrice: "$78.00",
      newPrice: "$70.20",
    },
    {
      id: 70,
      label: "",
      imgSrc: "../img/Product1/80083877_original_original_A.jpeg",
      name: "Contour Body Treatment Oil",
      size: "100ml",
      oldPrice: "",
      newPrice: "$78.00",
    },
  ];
  // Define state for search term and sort order
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
  
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
      src="/IMG/PLP-Header_Desktop_Silhouette_Inte-1-desktop-CA.jpg"
      alt="Body Firming"
      className="container-image"
    />
    <h1 className="container-title">Body Firming</h1>
    <p className="container-description">
    "Body firming products improve skin elasticity, leaving it toned and smooth."
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
            question: "How to choose a body contouring product",
            answer:
              "As we age, our skin can lose its elasticity over time. Factors such as weight loss, aging and hormone changes can lead to dry skin, loose skin or sagging skin on the face and body. Fortunately, Clarins has developed cosmetic alternatives to surgery and other options to help target problem areas on the tummy, arms and knees. Clarins’ collection of body contouring lotions and creams are non-invasive treatments to help in firming and tightening skin, regardless of your age. These products are formulated with active ingredients to target stubborn areas where skin may need tightening and shaping, such as the tummy, upper arms, thighs, and knees. When choosing a body contouring product, consider your skin type. If you have dry skin, choose a firming body lotion enriched with hydrating ingredients, such as shea butter, to moisturize skin while firming and toning your body for a leaner, cleaner shape. Mature skin should opt for a rich body cream or balm to nourish and tighten skin, particularly around the waistline, upper arms, thighs and knees, where skin can be prone to cellulite, sagging and loss of tone.",
          },
          {
            question: "What are the best ingredients to help firm the skin?",
            answer:
              "Clarins’ range of body contouring lotions and body shaping creams are designed with plant ingredients to shape and tone, prevent dehydration and sagging, target specific concerns and reduce the usual signs of aging while tightening skin. For younger skin, Clarins Masvelt Advanced Body Shaping Cream is designed to help skin recover its tone, firming and intensely hydrating skin thanks to celosia extract and plant caffeine, which help to inhibit fat storage and speed up fat removal, while organic mitracarpus extract helps firm and tone. ",
          },
          {
            question: "How to reduce the appearance of cellulite",
            answer:
              "Aging, body fat, lifestyle, hormones and genes can all affect the way cellulite appears on our skin. Cellulite commonly appears on the buttocks, thighs, and abdomen, giving the skin a dimpled and lumpy appearance. While cellulite is a natural phenomenon that tends to affect women more than men, a few treatments exist to help shape, firm and tone skin and reduce the appearance of dimpled skin. Exercise, paying attention to your diet and regularly applying a cosmetic treatment, such as a body contouring cream or body care oil, can all help to improve the skin’s tone and texture. Enriched with 100% plant extracts, Clarins Contour Body Treatment Oil helps eliminate toxins to visibly firm and tone the skin. To apply, massage a small amount onto dry or damp skin with light sweeping motions, moving upward from ankles towards the waistline. Rinse with cold water for tightened, firmed skin.",
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

export default Bodyfirming;
