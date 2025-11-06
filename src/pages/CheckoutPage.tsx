import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import "./CheckoutPage.css";
import CartModal from "./CartModel";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
} from "react-icons/fa";
import OrderConfirmation from "../components/OrderConfirmation";

import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";

const CheckoutPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { cart, subtotal, clearCart } = useCart();
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createOrder = useMutation(api.orders.createOrder);

  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping + vat;

  const firstItem = cart[0] || null;
  const otherCount = cart.length > 1 ? cart.length - 1 : 0;

  const onSubmit = async (data: any) => {
    try {
      const orderId = await createOrder({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        country: data.country,
        zip: data.zip,
        paymentMethod: data.paymentMethod,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal,
        shipping,
        vat,
        grandTotal,
        createdAt: new Date().toISOString(),
      });

      console.log("✅ Order saved with ID:", orderId);

      console.log("✅ Before modal open, cart:", cart);
console.log("✅ Setting modal open now...");
      setIsModalOpen(true);
      setTimeout(() => {
        clearCart();
      }, 5000);
    } catch (error) {
      console.error("❌ Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="checkout-page">
      <div className="container">
        <header className="header">
          <div className="logo">audiophile</div>
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/headphones">HEADPHONES</a>
            <a href="/speakers">SPEAKERS</a>
            <a href="/earphones">EARPHONES</a>
          </nav>
          <div className="cart-icon" onClick={() => setCartOpen(true)} style={{ position: "relative" }}>
  <FaShoppingCart size={22} />

  {totalItems > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-8px",
        right: "-8px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "2px 6px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {totalItems}
    </span>
  )}
</div>

          <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </header>
      </div>

      <a href="/" className="go-back">
        Go Back
      </a>

      <main className="checkout-wrapper">
        <div className="checkout-container">
          <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>CHECKOUT</h2>

            <section className="billing-section">
              <h3>BILLING DETAILS</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alexei Ward"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="error-message">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alexei@mail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error-message">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+1 202-555-0136"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[0-9\s-]{7,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="error-message">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="shipping-section">
              <h3>SHIPPING INFO</h3>
              <div className="form-group">
                <label htmlFor="address">Your Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="1137 Williams Avenue"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="error-message">
                    {errors.address.message as string}
                  </p>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="10001"
                    {...register("zip", {
                      required: "ZIP code is required",
                      pattern: {
                        value: /^[0-9]{4,6}$/,
                        message: "Invalid ZIP code",
                      },
                    })}
                  />
                  {errors.zip && (
                    <p className="error-message">
                      {errors.zip.message as string}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    {...register("city", { required: "City is required" })}
                  />
                  {errors.city && (
                    <p className="error-message">
                      {errors.city.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  placeholder="United States"
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && (
                  <p className="error-message">
                    {errors.country.message as string}
                  </p>
                )}
              </div>
            </section>

            <section className="payment-section">
              <h3>PAYMENT DETAILS</h3>
              <label>Payment Method</label>

              <div className="payment-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    value="eMoney"
                    {...register("paymentMethod", { required: true })}
                    defaultChecked
                  />
                  e-Money
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    value="cash"
                    {...register("paymentMethod", { required: true })}
                  />
                  Cash on Delivery
                </label>
              </div>

              {watch("paymentMethod") === "eMoney" ? (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="emoney">e-Money Number</label>
                    <input
                      id="emoney"
                      type="text"
                      placeholder="238521993"
                      {...register("emoney", {
                        required: "e-Money number is required",
                      })}
                    />
                    {errors.emoney && (
                      <p className="error-message">
                        {errors.emoney.message as string}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pin">e-Money PIN</label>
                    <input
                      id="pin"
                      type="text"
                      placeholder="6891"
                      {...register("pin", {
                        required: "PIN is required",
                        pattern: {
                          value: /^[0-9]{4}$/,
                          message: "Must be 4 digits",
                        },
                      })}
                    />
                    {errors.pin && (
                      <p className="error-message">
                        {errors.pin.message as string}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="cash-info">
                  The “Cash on Delivery” option enables you to pay in cash when
                  our delivery courier arrives at your residence. Please make
                  sure your address is correct so that your order will not be
                  cancelled.
                </p>
              )}
            </section>
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <aside className="summary">
              <h3>SUMMARY</h3>
              <div className="summary-items">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div className="summary-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <span>${item.price.toLocaleString()}</span>
                      </div>
                      <strong>x{item.quantity}</strong>
                    </div>
                  ))
                ) : (
                  <p className="empty">Your cart is empty.</p>
                )}
              </div>

              <div className="summary-totals">
                <div className="total-row">
                  <p>TOTAL</p>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <p>SHIPPING</p>
                  <span>${shipping}</span>
                </div>
                <div className="total-row">
                  <p>VAT (INCLUDED)</p>
                  <span>${vat.toFixed(2)}</span>
                </div>
                <div className="total-row grand-total">
                  <p>GRAND TOTAL</p>
                  <span>${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button className="btn-pay" type="submit">
                CONTINUE & PAY
              </button>
            </aside>
          </form>

          <OrderConfirmation
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            firstItem={
              firstItem
                ? {
                    name: firstItem.name,
                    image: firstItem.image,
                    quantity: firstItem.quantity,
                  }
                : null
            }
            otherCount={otherCount}
            grandTotal={grandTotal}
          />
        </div>
      </main>

      <footer className="Earphone-footer">
        <div className="Earphone-footer-top">
          <div className="Earphone-logo">audiophile</div>
          <nav className="Earphone-footer-nav">
            <a href="/">HOME</a>
            <a href="/headphones">HEADPHONES</a>
            <a href="/speakers">SPEAKERS</a>
            <a href="/earphones">EARPHONES</a>
          </nav>
        </div>
        <p className="Earphone-footer-text">
          Audiophile is an all-in-one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio.
        </p>
        <div className="Earphone-footer-bottom">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="Earphone-socials">
            <a target="blank" href="https://facebook.com">
              <FaFacebook className="facebook" />
            </a>
            <a target="blank" href="https://x.com">
              <FaTwitter className="twitter" />
            </a>
            <a target="blank" href="https://instagram.com">
              <FaInstagram className="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CheckoutPage;
