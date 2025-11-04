import React from "react";
import "./OrderConfirmation.css";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  firstItem: {
    name: string;
    image: string;
    quantity: number;
  } | null;
  otherCount: number;
  grandTotal: number;
};

const OrderConfirmationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  firstItem,
  otherCount,
  grandTotal,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleBackHome = () => {
    onClose();
    navigate("/");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="thankyou-icon">✓</div>
        <h2>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className="confirmation-text">
          You will receive an email confirmation shortly.
        </p>

        <div className="summary-box">
          <div className="left-box">
            {firstItem && (
              <div className="summary-item">
                <img src={firstItem.image} alt={firstItem.name} />
                <div>
                  <p className="item-name">{firstItem.name}</p>
                  <p className="item-price">x{firstItem.quantity}</p>
                </div>
              </div>
            )}

            {otherCount > 0 && (
              <p className="other-items">and {otherCount} other item(s)</p>
            )}
          </div>

          <div className="right-box">
            <p>GRAND TOTAL</p>
            <h3>$ {grandTotal.toLocaleString()}</h3>
          </div>
        </div>

        <button className="back-home-btn" onClick={handleBackHome}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
