import "./Just Arrived.css";
import "./Moisturizers .css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Moisturizers() {
  const products = [
    {
      id: 15,
      label: "NEW",
      imgSrc: "../img/Product1/80109777_original_original_1.jpg",
      name: "Double Serum Anti Aging + Anti Wrinkle Serum",
      size: "30ml",
      oldPrice: "$100.00",
      newPrice: "$99.00",
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
      id: 24,
      label: "NEW",
      imgSrc: "../img/Product1/80112647_original_original_1.jpg",
      name: "Mascaras Collection",
      size: "Unit",
      oldPrice: "$44.00",
      newPrice: "$39.00",
    },
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
            src="/IMG/plpheader-Face-DayCare-desktop.jpg"
            alt="Face Moisturizers and Creams"
            className="container-image"
          />
          <h1 className="container-title">Face Moisturizers and Creams</h1>
          <p className="container-description">
            "Moisturizers hydrate to keep your skin healthy and balanced."
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

      <div className="moisturizing-guide">
        <h4>Moisturizing Your Face, the Gentle, Targeted Way</h4>
        <p>
          Facial moisturizers - specially formulated products for all skin types
          and ages. Every one of us wants to put our best face forward on the
          daily and that means giving our skin the TLC that it deserves.
          Hydration is the first step in getting beautifully nourished and
          healthy skin.
        </p>

        <h4>Dry skin</h4>
        <p>
          Dry skin is thirsty skin and whatever your age, we have just the right
          products to quench it. Our range of face moisturizers for dry skin
          nourishes and locks in moisture in even the driest skin. They come
          with a host of additional benefits developed for your age range and
          each product is enriched with the right ingredients to give your skin
          a radiant glow.
        </p>
        <p>
          If you’re in your 20s and looking for the best day and night creams
          for dry skin, use My Clarins RE-BOOST comforting hydrating cream,
          filled with fruit and plant extracts dedicated to delivering beautiful
          skin. For your nighttime routine, the Hydra-Essentiel [HA²] Rich Cream
          can provide some extra nourishment and lovingly hydrate your skin
          while you get your beauty sleep.
        </p>
        <p>
          The 30s may be the new 20s, but you’re going to have to start giving
          your skin an extra bit of care to keep up! Give the Multi-Active Day
          Cream a go, as well as the Multi-Active Night Cream. Both contain
          Teasel extract to help visibly revitalize the skin. The day cream
          includes nourishing Cupucaçu butter in its list of ingredients, while
          the night cream contains beautifying organic California Poppy extract,
          with soothing properties for supple, radiant skin.
        </p>
        <p>
          For more mature skin, try the Extra-Firming Day and Extra-Firming
          Night options. The day cream boasts the reputed anti-aging properties
          of Kangaroo Flower extract, and the night cream includes hydrated
          silica extract of Moonstone, another ingredient boasting regenerative
          properties for glowing skin.
        </p>
        <p>
          When it comes to the best moisturizer for dry skin for women in their
          50s, take a look at the wonderfully nourishing Super Restorative Day -
          Very Dry Skin. Our Super Restorative Night - Very Dry Skin does the
          heavy lifting while you rest, leaving your skin refreshed and ready
          for the day.
        </p>
        <p>
          The Clarins Nutri-Lumière Day and Nutri-Lumière Night cream are the
          ultimate treat for everyday radiance for undernourished skin. Enriched
          with powerfully potent active ingredients from the horse chestnut
          tree, this silky moisturizer is intensely nourishing. Invigorating,
          hydrating, and revitalizing, this is the perfect moisturizer for
          gorgeous, luminous skin wherever you are.
        </p>

        <h4>Oily skin</h4>
        <p>
          To prevent oiliness, which can lead to blocked pores and blemishes,
          the best moisturizer for oily skin should be lightweight.
        </p>
        <p>
          For this reason, one of the best day creams for oily skin is the My
          Clarins RE-BOOST matifying hydrating cream, which is ideal for women
          in their 20s who are looking for a visibly mattified skin texture.
        </p>
        <p>
          Women in their 30s can use the Multi-Active Day Cream-Gel, which has a
          lighter texture in comparison to the other Multi-Active product
          options. Infused with Myrothamnus extract, this cream-gel helps to
          hydrate and reduce the appearance of fine lines, giving your skin a
          beautiful youthful glow.
        </p>

        <h4>Mature skin</h4>
        <p>
          As the skin ages, extra care needs to be taken against some of the
          harsh aging effects of the sun. A moisturizer with SPF can be used to
          nourish and hydrate your skin, while preventing the unwanted signs of
          aging due to the effects of the sun’s UV rays.
        </p>
        <p>
          If you’re looking for the best day cream with SPF for mature skin, try
          Clarins Extra-Firming Day SPF 15. It has been formulated for all skin
          types and offers extra protection against the signs of early aging
          from UV damage. This age-defying cream also reduces the visible
          appearance of fine lines and wrinkles, leaving your skin wonderfully
          nourished and refreshed.
        </p>
        <p>
          Clarins Super Restorative SPF 20 is a deeply replenishing anti-aging
          moisturizer for mature skin. Enriched with organic Harungana, it
          visibly lifts and smoothes, minimizes the appearance of age spots and
          deep wrinkles, and keeps your skin deliciously hydrated.
        </p>
      </div>
    </div>
  );
}

export default Moisturizers;
