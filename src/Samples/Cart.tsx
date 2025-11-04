import React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";



const Cart: React.FC = () => {
    const { cart, updateQuantity, clearCart, subtotal } = useCart();
    
    const navigate = useNavigate();

const handleCheckout = () => {
  if (cart.length === 0) return;
  navigate("/checkout");
};


  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
  <h3>CART ({cart.length})</h3>
  <button className="remove-all" onClick={clearCart}>Remove all</button>
</div>


        <main className="cart-items">
          <div className="cart-items">
  {cart.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
  ) : (
    cart.map((item) => (
      <div key={item.id} className="cart-item">
        <img
          src={item.image}
          alt={item.name}
          className="cart-item-img"
        />
        <div className="item-info">
          <p className="item-name">{item.name}</p>
          <p className="item-price">$ {item.price}</p>
        </div>
        <div className="quantity-control">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)
            }
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    ))
  )}
</div>

        </main>

        <div className="cart-total">
  <p>TOTAL</p>
  <p className="total-amount">$ {subtotal}</p>
</div>


        <button
  className="checkout-btn"
  onClick={handleCheckout}
  disabled={cart.length === 0}
>
  CHECKOUT
</button>

      </div>
    </div>
  );
};

export default Cart;
