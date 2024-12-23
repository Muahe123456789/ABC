import React, { useState } from "react";
import "./BestSeller.css";
import "./Just Arrived.css";
import { Link } from "react-router-dom";

function Concearels() {
  const products = [
    {
      id: 115,
      label: "",
      imgSrc: "../img/Product1/80104068_original_original_1.jpg",
      name: "Instant Concealer",
      size: "15ml",
      oldPrice: "$46.00",
      newPrice: "$41.40",
    },
    {
      id: 116,
      label: "",
      imgSrc: "../img/Product1/80068515_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 117,
      label: "",
      imgSrc: "../img/Product1/80068516_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: "$46.00",
    },
    {
      id: 118,
      label: "",
      imgSrc: "../img/Product1/80068519_original_original_1.jpg",
      name: "Everlasting Concealer",
      size: "12ml",
      oldPrice: "",
      newPrice: "$46.00",
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
    <div className="best-sellers-container">
      <div className="containerjust">
        <img
          src="/IMG/plpheader-Concealers-desktop.jpg"
          alt="Concealers"
          className="container-image"
        />
        <h1 className="container-title">Concealers</h1>
        <p className="container-description">
          Discover the best concealers for flawless skin.
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
    </div>
  );
}

export default Concearels;
