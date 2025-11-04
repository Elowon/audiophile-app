import React from "react";
import "./CartModel.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="cart-header">
          <h3>CART ({cart.length})</h3>
          <button className="remove-all" onClick={clearCart}>
            Remove all
          </button>
        </div>

        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">$ {item.price.toLocaleString()}</p>
                </div>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

      
        <div className="cart-total">
          <p>TOTAL</p>
          <p className="total-amount">$ {subtotal.toLocaleString()}</p>
        </div>

        
        <button
          className="checkout-btn"
          onClick={() => {
            onClose();
            navigate("/checkout");
          }}
          disabled={cart.length === 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartModal;
