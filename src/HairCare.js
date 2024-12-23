import "./Just Arrived.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function HairCare() {
  const products = [
    {
      id : 71,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80087281_original_original_X.webp",
      name: "Nourishing Shampoo Bar",
      size: "100ml",
      oldPrice: "",
      newPrice: "$28.00",
    },
    {
      id : 72,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80078282_original_original_1.webp",
      name: "Invigorating Shine Shampoo",
      size: "300ml",
      oldPrice: "",
      newPrice: "$34.00",
    },
    {
      id : 73,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80078283_original_original_1.webp",
      name: "Invigorating Shine Hair Conditioner",
      size: "300ml",
      oldPrice: "",
      newPrice: "$36.00",
    },
    {
      id : 74,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80057222_original_original_1.webp",
      name: "Nourishing Strengthening Mask",
      size: "200ml",
      oldPrice: "$45.00",
      newPrice: "$40.50",
    },
    {
      id : 75,
      label: "",
      imgSrc: "../img/Product1/80085753_original_original_x.webp",
      name: "ClarinsMen Shampoo & Shower",
      size: "200ml",
      oldPrice: "$35.00",
      newPrice: "$31.50",
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
      src="/IMG/2022_PRECIOUS_PLP-HEADER_Desktop_KeyVisual_2A.jpg_master.jpg"
      alt="Shampoos Conditioners & Hair Products"
      className="container-image"
    />
    <h1 className="container-title">Shampoos Conditioners & Hair Products</h1>
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
      
    </div>
  );
}

export default HairCare;
