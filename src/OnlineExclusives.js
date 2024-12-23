import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OnlineExclusives.css";
import "./Just Arrived.css";

function OnlineExclusives() {
  const products = [
    {
      id: 25,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112664_original_original_1.jpg",
      name: "Hydrating Gentle Foaming Face Cleanser for Normal to Dry Skin",
      size: "50ml",
      oldPrice: "",
      newPrice: "$20.00",
    },
    {
      id: 26,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112658_original_original_1.jpg",
      name: "Gentle Renewing Cleansing Mousse",
      size: "50ml",
      oldPrice: "",
      newPrice: "$18.00",
    },
    {
      id: 27,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112662_original_original_1.jpg",
      name: "Instant Eye Make-Up Remover",
      size: "50ml - 125ml",
      oldPrice: "",
      newPrice: "$19.00",
    },
    {
      id: 28,
      label: "New - Online Exclusive",
      imgSrc: "../img/Product1/80112660_original_original_1.jpg",
      name: "Cleansing Micellar Water",
      size: "100ml",
      oldPrice: "",
      newPrice: "$24.00",
    },
    {
      id: 29,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083300_original_original_X.jpg",
      name: "Eau Dynamisante",
      size: "50ml",
      oldPrice: "",
      newPrice: "$31.00",
    },
    {
      id: 30,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80083315_original_original_X.jpg",
      name: "Eau Ressourçante",
      size: "50ml",
      oldPrice: "$31.00",
      newPrice: "$27.90",
    },
    {
      id: 31,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80084964_original_original_A.webp",
      name: "Bright Plus Advanced brightening dark spot-targeting serum",
      size: "50ml",
      oldPrice: "$132.00",
      newPrice: "$118.80",
    },
    {
      id: 32,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80100571_original_original_1.webp",
      name: "Multi-Active Emulsion Moisturizer",
      size: "100ml",
      oldPrice: "",
      newPrice: "$72.00",
    },
    {
      id: 33,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092160_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Emulsion",
      size: "75ml",
      oldPrice: "$51.00",
      newPrice: "$45.90",
    },
    {
      id: 34,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80092153_original_original_X.webp",
      name: "Hydra-Essentiel [HA²] Silky Cream",
      size: "30ml",
      oldPrice: "",
      newPrice: "$34.00",
    },
    {
      id: 35,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80002597_original_original_A.webp",
      name: "Super Restorative Remodelling Serumr",
      size: "50ml",
      oldPrice: "$202.00",
      newPrice: "$181.80",
    },
    {
      id: 36,
      label: "Online Exclusive",
      imgSrc: "../img/Product1/80076240_original_original_X.webp",
      name: "Moisture-Rich Body Lotion",
      size: "400ml",
      oldPrice: "$74.00",
      newPrice: "$66.60",
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
            src="/IMG/plpheader-Body-Oils-desktop.jpg"
            alt="Online Exclusives"
            className="container-image"
          />
          <h1 className="container-title">Online Exclusives</h1>
          <p className="container-description">
            Discover exclusive online offers and shop now for unbeatable deals!
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
    </div>
  );
}

export default OnlineExclusives;
