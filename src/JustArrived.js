import React, { useState, useEffect } from "react"; // Thêm useEffect
import { Link } from "react-router-dom";
import "./Just Arrived.css";
import "./ShippingInfo.css";

function JustArrived() {
  const products = [
    {
      id: 13,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Lunar New Year Edition",
      size: "75ml",
      newPrice: "$204.00",
    },
    {
      id: 14,
      label: "LIMITED EDITION",
      imgSrc: "../img/Product1/80077133_original_original_A.webp",
      name: "Double Serum Eye Lunar New Year Edition",
      size: "20ml",
      newPrice: "$102.00",
    },
    {
      id: 15,
      label: "NEW",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "30ml",
      oldPrice: "$100.00",
      newPrice: "$99.00 ",
    },
    {
      id: 16,
      label: "NEW",
      imgSrc: "../img/Product1/80116593_original_original_1.jpg",
      name: "Sun Care Essentials",
      size: "Unit",
      oldPrice: "$62.00",
      newPrice: "$40.00",
    },
    {
      id: 17,
      label: "NEW",
      imgSrc: "../img/Product1/80112531_original_original_2.jpg",
      name: "The Precious Discovery Set",
      size: "Unit",
      newPrice: "$370.00",
    },
    {
      id: 18,
      label: "NEW",
      imgSrc: "../img/Product1/80105569_original_original_1.jpg",
      name: "Rose Radiance Peptide Day Cream for Mature Skin",
      size: "20ml",
      oldPrice: "$150.00",
      newPrice: "$135.00",
    },
    {
      id: 19,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112650_original_original_1.jpg",
      name: "12-Day Advent Calendar",
      size: "Unit",
      oldPrice: "$251.00",
      newPrice: "$135.00",
    },
    {
      id: 20,
      label: "HOLIDAY SPECIAL",
      imgSrc: "../img/Product1/80112630_original_original_1.webp",
      name: "Double Serum & Double Serum Eye Collection",
      size: "200ml - 400ml",
      oldPrice: "$252.00",
      newPrice: "$216.00",
    },
    {
      id: 21,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80080587_original_original_1.webp",
      name: "ClarinsMen Super Moisture Balm",
      size: "50ml",
      oldPrice: "$43.00",
      newPrice: "$38.70",
    },
    {
      id: 22,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80070887_original_original_1.jpg",
      name: "Extra-Firming Energy + Radiance Face Cream",
      size: "50ml",
      oldPrice: "$112.00",
      newPrice: "$100.80",
    },
    {
      id: 23,
      label: "BEST SELLER",
      imgSrc: "../img/Product1/80074506_original_original_1.jpg",
      name: "Radiance-Plus Golden Glow Booster",
      size: "15ml",
      oldPrice: "$38.00",
      newPrice: "$27.50",
    },
    {
      id: 24,
      label: "NEW",
      imgSrc: "../img/Product1/80112647_original_original_1.jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "$44.00",
      newPrice: "$39.00",
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
      {/* Phần đầu trang */}
      <div className="containerjust">
        <img
          src="/IMG/plpheader-Face-ExfoliatorsMasks-desktop.jpg"
          alt="Just Arrived"
          className="container-image"
        />
        <h1 className="container-title">Just Arrived</h1>
        <p className="container-description">
          BE THE FIRST TO SHOP NEW PLANT-POWERED FORMULAS
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
    </div>
  );
}

export default JustArrived;
