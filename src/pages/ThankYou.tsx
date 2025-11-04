import React from "react";
import "./ThankYou.css"; // we’ll style it next

interface ThankYouProps {
  onClose: () => void;
  grandTotal: number;
  name: string;
  email: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ onClose, grandTotal, name }) => {
  return (
    <div className="thankyou-overlay">
      <div className="thankyou-modal">
        <h2>Thank you, {name}!</h2>
        <p>Your order has been received and is being processed.</p>
        <p className="grand-total">
          Grand Total: <strong>${grandTotal.toLocaleString()}</strong>
        </p>
        <button className="thankyou-btn" onClick={onClose}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
