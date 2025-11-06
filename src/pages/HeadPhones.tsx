import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./HeadPhones.css";
import bitmap4 from "../assets/images/Bitmap4.png";
import group3 from "../assets/images2/Group 3.png";
import headphone2 from "../assets/images2/headphone2.png";
import removebg2 from "../assets/images2/image-removebg.png";
import group15 from "../assets/images/Group 15.png";
import group14 from "../assets/images/Group 14.png";
import group6 from "../assets/images/Group 6.png";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModel";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Headphones = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const {totalItems} = useCart();
  return (
    <main className="headphones-page">
      <div className="headphone-container">
        <header className="headphone-header">
          <div className="headphone-logo">audiophile</div>
          <nav className="headphone-nav">
            <a className="headphone-home1" href="/">
              HOME
            </a>
            <a className="headphone-headphones1" href="/headphones">
              HEADPHONES
            </a>
            <a className="headphone-speakers1" href="/speakers">
              SPEAKERS
            </a>
            <a className="headphone-earphones1" href="/earphones">
              EARPHONES
            </a>
          </nav>
          <div
            className="cart-icon"
            onClick={() => setCartOpen(true)}
            style={{ position: "relative" }}
          >
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

        <section className="page-title">
          <h1>HEADPHONES</h1>
        </section>
      </div>

      <section className="product-section">
        <div className="product-inner">
          <div className="product-image">
            {" "}
            <img className="imag1" src={group3} alt={group3} />
          </div>
          <div className="product-text">
            <p className="new-product">NEW PRODUCT</p>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>
              The new XX99 Mark II headphones are the pinnacle of pristine
              audio. It redefines your premium headphone experience by
              reproducing the balanced depth and precision of studio-quality
              sound.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/product1")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="product-section reverse">
        <div className="product-inner">
          <div className="product-image">
            {" "}
            <img className="imag2" src={headphone2} alt={headphone2} />
          </div>
          <div className="product-text">
            <h2>XX99 MARK I HEADPHONES</h2>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/product2")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-inner">
          <div className="product-image">
            {" "}
            <img className="imag3" src={removebg2} alt={removebg2} />
          </div>
          <div className="product-text">
            <h2>XX59 HEADPHONES</h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/product3")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="headphones-categories">
        <div className="headphones-category-card">
          <div className="headphones-cat-img">
            <img className="cat1" src={group15} alt={group15} />
          </div>
          <h3>HEADPHONES</h3>
          <a href="/checkout" className="headphones-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="headphones-category-card">
          <div className="headphones-cat-img">
            <img className="cat2" src={group14} alt={group14} />
          </div>
          <h3>SPEAKERS</h3>
          <a href="/checkout" className="headphones-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="headphones-category-card">
          <div className="headphones-cat-img">
            <img className="cat3" src={group6} alt={group6} />
          </div>
          <h3>EARPHONES</h3>
          <a href="/checkout" className="headphones-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>
      </section>

      <section className="headphones-info">
        <div className="headphones-info-text">
          <h2>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Visit our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="headphones-info-img">
          <img src={bitmap4} alt={bitmap4} />
        </div>
      </section>

      <footer className="headphone-footer">
        <div className="headphone-footer-top">
          <div className="headphone-logo">audiophile</div>
          <nav className="headphone-footer-nav">
            <a className="headphone-headphone-home" href="/">
              HOME
            </a>
            <a className="headphone-headphones" href="/headphones">
              HEADPHONES
            </a>
            <a className="headphone-speakers" href="/speakers">
              SPEAKERS
            </a>
            <a className="headphone-earphones" href="/earphones">
              EARPHONES
            </a>
          </nav>
        </div>
        <p className="headphone-footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="headphone-footer-bottom">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="headphone-socials">
            <a
              target="blank"
              href="https://web.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgeeksforgeeks.org%2F&_rdc=1&_rdr#"
            >
              <FaFacebook className="facebook" />
            </a>
            <a target="blank" href="https://x.com/">
              <FaTwitter className="twitter" />
            </a>
            <a target="blank" href="https://www.instagram.com/">
              <FaInstagram className="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Headphones;
