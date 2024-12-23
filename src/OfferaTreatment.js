import React, { useState } from "react";
import "./OfferaTreatment.css"; 


function OfferaTreatment() {
  const [giftCardNumber, setGiftCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckBalance = () => {
    if (!giftCardNumber || !pin) {
      setMessage("Please enter both Gift Card Number and PIN.");
    } else {
      setMessage("Checking balance...");
      // Simulate an API call
      setTimeout(() => {
        setMessage("Balance: $50.00"); // Example response
      }, 2000);
    }
  };

  // ------------------------

   

  return (
    <div>
     
      <div className="gift-card-container">
        <h1>Clarins Gift Cards</h1>
        <p>SHARE THE BEAUTY OF CLARINS</p>
        <p>Take the guesswork out of gifting, and let them choose their favorites by sending a physical or digital gift card.</p>
        <div className="card-options">
          <div className="card-option">
            <img src="../img/Product1/alo1.webp" alt="Gift Card" />
            <button>Buy a Gift Card</button>
          </div>
          <div className="card-option">
            <img src="../img/Product1/alo2.webp" alt="e-Gift Card" />
            <button>Buy an e-Gift Card</button>
          </div>
        </div>
        <div className="check-balance-section">
          <h2>Already have a gift card?</h2>
          <p>Enter your gift card number to check your balance.</p>
          <div className="input-group">
            <img src="../img/Product1/alo3.webp" alt="Gift Card" />
            <input
              type="text"
              placeholder="Gift card number*"
              value={giftCardNumber}
              onChange={(e) => setGiftCardNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="PIN*"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <button onClick={handleCheckBalance}>Check Balance</button>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default OfferaTreatment;
