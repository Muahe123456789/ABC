import React from "react";
import "./LiveC.css"; // Tạo một file CSS duy nhất để quản lý tất cả các phần

const Live = () => {
  return (
    <div className="integrated-container">
      {/* VirtualConsultation Section */}
      <div >
      <section className="consultation-section">
        <div className="consultation-content">
          <div className="consultation-image">
            <img
              src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dw33cd2f2d/content/Live-Consultation-2021/img/logo-EN.png"
              alt="Live Consultation"
              className="live-consultation-img"
            />
          </div>
          <div className="consultation-description">
            <p>
              Treat yourself to a complimentary beauty consultation with a Virtual Beauty Consultant!
            </p>
          </div>
          <div className="consultation-buttons">
            <button className="btn btn-primary">Start live consultation</button>
            <button className="btn btn-secondary">Book my consultation</button>
          </div>
        </div>
      </section>
      </div>
      {/* LiveConsultation Section */}
      <section className="live-consultation-section">
        <div className="main-section">
          <div className="image-container">
            <img
              src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/en_CA/dwd9f6d331/content/live-consultation-2023/img/live-consultation-landing-page.jpg"
              alt="Beauty Consultant"
              className="image"
            />
          </div>
          <div className="content">
            <h2 className="section-title">
              <strong>Connect with a Beauty Consultant for a complimentary consultation</strong>
            </h2>
            <p className="text">
              <strong>Have a question? Our Virtual Beauty Consultant is here to listen and answer all your beauty questions.</strong>
            </p>
            <p className="text">
              Our friendly Virtual Beauty Consultant is here to listen, guide, and give you the real shopping experience in the comfort of your own home.
            </p>
            <p className="text">
              Consultations range between 15 to 30 minutes. For an optimal experience, we recommend you turn on your camera, but if you prefer, you can select voice only. Please allow access to your device’s camera and microphone when prompted just prior to connecting with the Virtual Beauty Consultant.
            </p>
            <p className="text">The virtual boutique is open from Monday to Friday, 9am – 5pm.</p>
            <div className="button-group">
              <button className="primary-button">Start live consultation</button>
              <button className="secondary-button">Book my consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="header">
          <h1>Not in the mood to talk?</h1>
          <p>Discover quizzes, expert advice, and tutorials at your own pace.</p>
        </div>
        <div className="cardsB">
          <div className="cardB">
            <img
              src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/default/dwb5b5c1d0/content/Live-Consultation-2021/img/vb-carousel-item1.png"
              alt="Skin Quiz & Product Finders"
              className="cardB-img"
            />
            <h3>SKIN QUIZ & PRODUCT FINDERS</h3>
          </div>
          <div className="cardB">
            <img
              src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/en_CA/dwa314752d/content/Live-Consultation-2021/img/vb-carousel-item3.png"
              alt="Application Methods"
              className="cardB-img"
            />
            <h3>APPLICATION METHODS</h3>
          </div>
          <div className="cardB">
            <img
              src="https://www.clarins.ca/on/demandware.static/-/Library-Sites-clarins-v3/en_CA/dw5b920513/content/live-consultation-2023/img/vb-carousel-item3-new.jpg"
              alt="Beauty FAQs"
              className="cardB-img"
            />
            <h3>BEAUTY FAQS</h3>
          </div>
        </div>
        <div className="footer2">
          <p>
            <strong>
              What you should know: During your session, the Virtual Beauty Consultant may ask if you would like to subscribe to our newsletter and receive marketing communications by providing your email address and/or phone number.
            </strong>
          </p>
          <p>
            You have the option whether you would like to opt in to receive Clarins marketing communications. The quality of service will not be impacted by your choice. When you agree to the use of personal data for the aforementioned purposes, the Virtual Beauty Consultant proceeds to the finalization of your inscription. You have the right to opt out at any time on your Clarins.com account or by contacting Customer Care.
          </p>
          <p>
            At the end of the "Live Consultation," provided that you give your e-mail address during the session or that you are logged in to your account and unless you object, you may receive a single summary e-mail including all the products that may have been recommended by your Virtual Beauty Consultant.
          </p>
          <p>
            Please see our <a href="/privacy-policy">Privacy Policy</a> for more details.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Live;
