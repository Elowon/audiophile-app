import React from "react";
import "./Thanks.css";
import thankyou from "../assets/images3/thanks.png"

const Thanks: React.FC = () => {
  return (
    <main className="thankyou-overlay">
      <div className="thankyou-modal">
        <div className="thankyou-icon">✓</div>

        <h2 className="thankyou-title">THANK YOU<br />FOR YOUR ORDER</h2>
        <p className="thankyou-message">
          You will receive an email confirmation shortly.
        </p>

        <div className="thankyou-summary">
          <div className="summary-left">
            <div className="summary-item">
              <img
                src= {thankyou}
                alt="XX99 Mark II"
                className="summary-img"
              />
              <div className="summary-details">
                <p className="summary-name">XX99 MK II</p>
                <p className="summary-price">$ 2,999</p>
              </div>
              <p className="summary-qty">x1</p>
            </div>
            <p className="summary-others">and 2 other item(s)</p>
          </div>

          <div className="summary-right">
            <p className="grand-total-label">GRAND TOTAL</p>
            <p className="grand-total-amount">$ 5,446</p>
          </div>
        </div>

        <button className="back-home-btn">BACK TO HOME</button>
      </div>
    </main>
  );
};

export default Thanks;
