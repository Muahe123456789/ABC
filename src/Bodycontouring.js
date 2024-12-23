import "./Just Arrived.css";
import "./Bodycontouring.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function Bodycontouring () {
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
      src="/IMG/plpheader-BodyCounturing-desktop.jpg"
      alt="Body Contouring"
      className="container-image"
    />
    <h1 className="container-title">Body Contouring</h1>
    <p className="container-description">
    "Body contouring moisturizers hydrate and help sculpt and firm skin."
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

            
      <div className="body-care-guide">
      <h4>How to Keep your Body Looking its Best at Every Stage of Life</h4>
      <p>
        As we get older, the body loses its firmness and flawless appearance.
        Other factors such as pregnancy, weight gain or loss, and even hormone
        changes can also take their toll on our skin. Clarins has created body
        contouring and stretch mark creams to keep your body looking its best
        with a tailored beauty routine.
      </p>
      <p>
        What’s more, Clarins invented the term Aromaphytocare with you in mind.
        Using a combination of aromatherapy and phytotherapy (fragrances and the
        benefits of plants), each product is a treat for the skin and the
        senses. So remember to apply, breathe in deeply, relax and enjoy an
        overall sense of wellbeing!
      </p>

      <h4>What is body contouring all about?</h4>
      <p>
        Skin starts to slack when the collagen fibres that once kept the tissue
        firm are altered. In many cases, the overall appearance of the body can
        be improved when using a body shaping cream that aids the skin’s firm
        appearance.
      </p>
      <p>
        Clarins’ luxurious Body Shaping Cream is designed to target the areas
        that are most prone to stubborn fat — the waist, abdomen, hips, arms,
        and knees. Formulated with natural plant extracts of Poppy and organic
        Quince, this powerful cream visibly firms and defines the skin while
        leaving it looking beautifully hydrated. The deliciously fresh, melting
        texture is perfect for massage.
      </p>
      <p>
        Ready to declare war on cellulite? Clarins has your back with Body Fit.
        One of our best body contouring creams, Body Fit is powered by eight
        targeted plant extracts—including organic Quince Leaf—that help to
        visibly firm, lift and streamline the appearance of thighs and hips. The
        addictively refreshing cream-gel texture absorbs instantly to soothe and
        smooth the skin's surface.
      </p>

      <h4>What is Clarins best stretch mark prevention cream?</h4>
      <p>
        While it’s impossible to completely avoid getting stretch marks at some
        point in your life, there is help when it comes to minimizing their
        appearance. There are also steps you can take to keep skin well-hydrated
        against the effects of skin-stretching.
      </p>
      <p>
        Meet your Body Partner—our best stretch mark cream with a silky
        lightweight formula to help minimize the appearance of stretch marks on
        the skin's surface. This pro formula is a combination of active
        ingredients that can help keep your skin looking visibly firm.
      </p>

      <h4>The perfect body contouring routine</h4>
      <p>
        Optimize the results of your body contouring cream by exfoliating once
        or twice a week. Regular use of a body scrub will help boost the action
        of the products you apply afterwards. Try a Clarins skin-smoothing
        exfoliator to gently slough away dead skin cells.
      </p>
      <p>
        In addition, layering your body contouring cream with our body treatment
        oils also helps to optimize the results. For a slimmer-looking
        silhouette, use the Anti-Eau Body Treatment Oil under Body Shaping Cream
        or Body Fit. To improve skin’s elasticity and reduce the appearance of
        stretch marks caused by pregnancy and weight loss, use the Tonic Body
        Treatment Oil under the Body Partner.
      </p>
      <p>
        Clarins Body Fit has many helpful online tips and tutorials, to help you
        keep your body looking its best at every stage of life!
      </p>
    </div>
    </div>
    
  );
}

export default Bodycontouring ;
