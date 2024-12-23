import React, { useState } from "react";
import "./Holiday.css";

const ProductPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [zoomImage, setZoomImage] = useState(false);
  const [mainImage, setMainImage] = useState("https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwce7d829d/original/80112650_original_original_1.jpg?sw=1000&sh=1000");

  const handleSeeMore = () => setShowMore((prev) => !prev);
  const toggleZoom = () => setZoomImage((prev) => !prev);

  const thumbnails = [
    "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwce7d829d/original/80112650_original_original_1.jpg?sw=1000&sh=1000",
    "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwd07c2c8b/original/80112650_original_original_B.jpg?sw=1000&sh=1000",
    "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw43126f40/original/80112650_original_original_C.jpg?sw=1000&sh=1000",
    "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwf0fd33cc/original/80112650_original_original_E.jpg?sw=1000&sh=1000",
  ];

  const fullDescription = `
    This 12-Day Advent Calendar celebrates the magic of the festive season with 3 carefully selected beauty routines for face care, body care, and makeup. 
    The best of Clarins’ expertise to enhance your skin and look after yourself throughout December. 
    With its plastic-free case and 100% FSC-certified and recyclable paper, this eco-designed calendar is part of our commitment to reducing our environmental impact.
    Ready for a cosmic party? Embark on the most fabulous journey, to the planet of Clarins. This Advent calendar celebrates the magic of the festive season with a constellation of beauty surprises: 3 face care, body care, and makeup routines carefully selected to pamper you throughout December.
    The calendar's Parisian façade is a nod to Clarins' origins, celebrating 70 years of plant-based beauty and professional expertise.
    This set contains: Beauty Flash Balm, Lip Comfort Oil, Hydrating Toning Lotion, One-Step Gentle Exfoliating Cleanser, Hydra-Essentiel Mask, Total Eye Lift, SOS Primer, SOS Lashes Serum Mascara, Wonder Perfect Mascara, Moisture-Rich Body Lotion, Exfoliating Body Scrub For Smooth Skin, and Hand and Nail Treatment Cream.
  `;

  // b3

  const products = [
    {
      id: 1,
      name: "Resculpting Flash Roller",
      price: "$55.00",
      image:
        "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw75c2ab83/original/80091139_original_original_X.jpg?sw=520&sh=520",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Precious L'Outil 3-in-1 Facial Massage Tool",
      price: "$70.00",
      image:
        "https://www.clarins.ca/dw/image/v2/AAFS_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dwbd3639d3/original/80095377_original_original_1.jpg?sw=520&sh=520",
      rating: 4,
    },
  ];

  // b4
  const RatingsReviews = () => {
    const [reviews, setReviews] = useState([
      {
        id: 1,
        name: "Lori MJ",
        location: "London",
        review: "[This review was collected as part of a promotion.] Great products, loved them all, would recommend to anyone",
        age: "26-35",
        rating: 5,
        date: "2024-12-16",
        verified: true,
        recommends: true,
        site: "clarins.co.uk",
      },
      {
        id: 2,
        name: "Jeck",
        location: "Bridlington East Yorkshire",
        review: "Why 12 days advent has 24. I'm using mine for the twelve days of Xmas!!",
        age: null,
        rating: 3,
        date: "2024-12-17",
        verified: true,
        recommends: true,
        site: "clarins.co.uk",
      },
    ]);
  
    const [filterRating, setFilterRating] = useState(null);
    const [newReview, setNewReview] = useState({
      name: "",
      location: "",
      rating: 1,
      review: "",
      age: "",
      recommends: true,
    });
  
    const filteredReviews = filterRating
      ? reviews.filter((review) => review.rating === filterRating)
      : reviews;
  
    const handleFilterChange = (event) => {
      setFilterRating(parseInt(event.target.value));
    };
  
    const handleReviewChange = (e) => {
      setNewReview({ ...newReview, [e.target.name]: e.target.value });
    };
  
    const handleSubmitReview = (e) => {
      e.preventDefault();
      setReviews([...reviews, { ...newReview, id: reviews.length + 1, date: new Date().toLocaleDateString() }]);
      setNewReview({
        name: "",
        location: "",
        rating: 1,
        review: "",
        age: "",
        recommends: true,
      });
    };
  
    const [expandedReviewId, setExpandedReviewId] = useState(null);
  
    const toggleReviewExpansion = (id) => {
      setExpandedReviewId(expandedReviewId === id ? null : id);
    };
  
    const getReviewTitle = (rating) => {
      if (rating === 5) return "Excellent";
      if (rating === 4) return "Good";
      if (rating === 3) return "Okay";
      return "Disappointing";
    };

  }

  const [reviews, setReviews] = useState([
      {
        id: 1,
        name: "Lori MJ",
        location: "London",
        review: "[This review was collected as part of a promotion.] Great products, loved them all, would recommend to anyone",
        age: "26-35",
        rating: 5,
        date: "2024-12-16",
        verified: true,
        recommends: true,
        site: "clarins.co.uk",
      },
      {
        id: 2,
        name: "Jeck",
        location: "Bridlington East Yorkshire",
        review: "Why 12 days advent has 24. I'm using mine for the twelve days of Xmas!!",
        age: null,
        rating: 3,
        date: "2024-12-17",
        verified: true,
        recommends: true,
        site: "clarins.co.uk",
      },
    ]);
  
    const [filterRating, setFilterRating] = useState(null);
    const [newReview, setNewReview] = useState({
      name: "",
      location: "",
      rating: 1,
      review: "",
      age: "",
      recommends: true,
    });
  
    const filteredReviews = filterRating
      ? reviews.filter((review) => review.rating === filterRating)
      : reviews;
  
    const handleFilterChange = (event) => {
      setFilterRating(parseInt(event.target.value));
    };
  
    const handleReviewChange = (e) => {
      setNewReview({ ...newReview, [e.target.name]: e.target.value });
    };
  
    const handleSubmitReview = (e) => {
      e.preventDefault();
      setReviews([...reviews, { ...newReview, id: reviews.length + 1, date: new Date().toLocaleDateString() }]);
      setNewReview({
        name: "",
        location: "",
        rating: 1,
        review: "",
        age: "",
        recommends: true,
      });
    };
  
    const [expandedReviewId, setExpandedReviewId] = useState(null);
  
    const toggleReviewExpansion = (id) => {
      setExpandedReviewId(expandedReviewId === id ? null : id);
    };
  
    const getReviewTitle = (rating) => {
      if (rating === 5) return "Excellent";
      if (rating === 4) return "Good";
      if (rating === 3) return "Okay";
      return "Disappointing";
    };
  return (
    <div >
      <div className="product-pageaaa">
      <div className="product-images">
        <div className="thumbnail-images">
          {thumbnails.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(url)}
            />
          ))}
        </div>
        <div className={`main-image ${zoomImage ? "zoom" : ""}`} onClick={toggleZoom}>
          <img src={mainImage} alt="Main Product" />
        </div>
      </div>

      <div className="product-details">
        <h1>12-Day Advent Calendar</h1>
        <div className="reviews">
          <span>★★★★★</span> <span>21 Reviews</span>
        </div>
        <p className="price">$135.00</p>
        <p className="description">
          All of Clarins' expertise in 12 skincare and makeup surprises. This Advent Calendar celebrates the festive season with 3 carefully selected beauty routines for face care, body care, and makeup.
        </p>
        <div className="add-to-cart">
          <input type="number" min="1" max="10" defaultValue="1" />
          <button>Add to Bag</button>
        </div>
        <div className="additional-info">
          <p>✅ Free carbon-neutral shipping on this item</p>
          <p>🎁 Earn 1350 points with this purchase!</p>
        </div>
        <div className="what-it-is">
          <h3>What it is</h3>
          <p>
            {showMore ? fullDescription : `${fullDescription.substring(0, 300)}...`}
          </p>
          <button className="see-more-btn" onClick={handleSeeMore}>
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      </div>
<div>
{/* b2 */}
      <div className="container">
        <section className="header">
            <h1>12-Day eco-designed Advent Calendar</h1>
            <p>
            Encapsulates the holiday spirit with 3 carefully chosen beauty routines:
            facial care, body care, and makeup.
            </p>
        </section>

        <section className="cards">
            <div className="card">
            <img
                src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwb2291e74/content/Holidays-2024/merchpage/images/advent_routine_10.webp"
                alt="Reveal your skin's glow"
                className="card-image"
            />
            <h3>Reveal your skin's glow</h3>
            <a href="#">SEE THE ROUTINE</a>
            </div>

            <div className="card">
            <img
                src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw2629120a/content/Holidays-2024/merchpage/images/advent_routine_3.webp"
                alt="Highlight your natural beauty"
                className="card-image"
            />
            <h3>Highlight your natural beauty</h3>
            <a href="#">SEE THE ROUTINE</a>
            </div>

            <div className="card">
            <img
                src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw0dad3851/content/Holidays-2024/merchpage/images/advent_routine_2.webp"
                alt="Nourish your skin"
                className="card-image"
            />
            <h3>Nourish your skin</h3>
            <a href="#">SEE THE ROUTINE</a>
            </div>
        </section>
        <section className="footerbbc">
  <h2>Ready for lift off to the Clarins constellation?</h2>
  <p>
    Discover a season of surprises and a galaxy of gifts, each shining brighter
    than the next.
  </p>
  <iframe
    className="footer-video"
    src="https://player.vimeo.com/video/982732689?h=58479&badge=0&muted=1&autoplay=1&autopause=0"
    width="100%" 
    height="600"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
    title="Clarins Constellation"
  ></iframe>
</section>

        </div>
        </div>
        {/* b3 */}
        <div className="recommendation-section">
      <h2 className="section-title">You might also like</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <button className="quick-view-button">Quick View</button>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-unit">unit</p>
            <p className="product-price">{product.price}</p>
            <div className="product-rating">
              {"★".repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 ? "☆" : ""}
              {"☆".repeat(5 - Math.ceil(product.rating))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* b4 */}
    <div className="ratings-reviews-section">
      <div className="header">
        <h2>Ratings and reviews</h2>
        <button className="write-review-button" onClick={() => document.getElementById("review-form").scrollIntoView()}>Write a review</button>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <label>Filter by Rating:</label>
        <select value={filterRating || ""} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="1">1★</option>
          <option value="2">2★</option>
          <option value="3">3★</option>
          <option value="4">4★</option>
          <option value="5">5★</option>
        </select>
      </div>

      {/* Reviews Section */}
      <div className="reviews-list">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <span className="review-rating">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </span>
              <span className="review-date">{review.date}</span>
            </div>
            <h4 className="review-title">{getReviewTitle(review.rating)}</h4>
            <p className="review-content">
              {expandedReviewId === review.id
                ? review.review
                : `${review.review.substring(0, 100)}...`}
            </p>
            {review.review.length > 100 && (
              <button onClick={() => toggleReviewExpansion(review.id)}>
                {expandedReviewId === review.id ? "Show less" : "Show more"}
              </button>
            )}
            <p className="review-user">
              {review.name} <span>{review.location}</span>
              {review.age && <span>Age {review.age}</span>}
            </p>
            <p className="review-recommend">
              Recommends this product: {review.recommends ? "✔ Yes" : "✘ No"}
            </p>
            <p className="review-source">Originally posted on {review.site}</p>
            {review.verified && <span className="verified">Verified Purchaser</span>}
          </div>
        ))}
      </div>

      {/* New Review Form */}
      <div id="review-form" className="review-form">
        <h3>Write a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleReviewChange}
            required
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newReview.location}
            onChange={handleReviewChange}
          />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={newReview.age}
            onChange={handleReviewChange}
          />
          <label>Rating:</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleReviewChange}
            required
          >
            <option value="1">1★</option>
            <option value="2">2★</option>
            <option value="3">3★</option>
            <option value="4">4★</option>
            <option value="5">5★</option>
          </select>
          <label>Review:</label>
          <textarea
            name="review"
            value={newReview.review}
            onChange={handleReviewChange}
            required
          ></textarea>
          <label>Recommend this product:</label>
          <input
            type="checkbox"
            name="recommends"
            checked={newReview.recommends}
            onChange={(e) => setNewReview({ ...newReview, recommends: e.target.checked })}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
