import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BestSeller.css";
import "./Just Arrived.css";

function BestSellers() {
  const products = [
    {
      id: 1,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80103084_original_original_1.webp",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "50ml",
      oldPrice: "$157.00",
      newPrice: "$141.30",
    },
    {
      id: 2,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80093147_original_original_A.webp",
      name: "Double Serum Light Texture Anti-Aging Serum",
      size: "50ml",
      oldPrice: "$142.00",
      newPrice: "$127.80",
    },
    {
      id: 3,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye - Anti Aging Eye Care",
      size: "50ml",
      oldPrice: "$102.00",
      newPrice: "$91.80",
    },
    {
      id: 4,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/00596100_original_original_x.webp",
      name: "Gentle Care Roll-On Deodorant",
      size: "50ml",
      oldPrice: "$26.00",
      newPrice: "$23.40",
    },
    {
      id: 5,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80056458_original_original_A.webp",
      name: "Extra-Firming Neck and Décolleté",
      size: "30ml",
      oldPrice: "$104.00",
      newPrice: "$93.60",
    },
    {
      id: 6,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80044967_hero_original.webp",
      name: "Wonder Perfect Mascara 4D",
      size: "8ml",
      oldPrice: "$39.00",
      newPrice: "$35.10",
    },
    {
      id: 7,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80068482_original_original_1.webp",
      name: "Total Eye Lift - Under Eye Tightening Cream",
      size: "15ml",
      oldPrice: "$105.00",
      newPrice: "$94.50",
    },
    {
      id: 8,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80102952_original_original_1.jpg",
      name: "Body Fit Active Skin Smoothing Cellulite Cream",
      size: "200ml",
      oldPrice: "$90.00",
      newPrice: "$81.00",
    },
    {
      id: 9,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: "$38.70",
    },
    {
      id: 10,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: "$100.80",
    },
    {
      id: 11,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: "$27.50",
    },
    {
      id: 12,
      label: "BEST SELLE",
      imgSrc: "../img/Product1/80083866_original_original_A.webp",
      name: "Sun Care Essentials",
      size: "100ml",
      oldPrice: "$78.00",
      newPrice: "$70.20",
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
          src="/img/PLP-Header_Desktop_Silhouette_Inte-1-desktop-CA.jpg"
          alt="Best Seller"
          className="container-image"
        />
        <h1 className="container-title">Best Sellers</h1>
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
    </div>
  );
}

export default BestSellers;
