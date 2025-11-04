import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./EarphonePage.css";
import bitmap4 from "../assets/images/Bitmap4.png";
import earphonee from "../assets/images3/earphoneee.png";
import group15 from "../assets/images/Group 15.png";
import group14 from "../assets/images/Group 14.png";
import group6 from "../assets/images/Group 6.png";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModel";
import { useState } from "react";

const EarphonePage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="Earphone-page">
      <div className="Earphone-container">
        <header className="Earphone-header">
          <div className="Earphone-logo">audiophile</div>
          <nav className="Earphone-nav">
            <a className="Earphone-home1" href="/">
              HOME
            </a>
            <a className="Earphone-headphones1" href="/headphones">
              HEADPHONES
            </a>
            <a className="Earphone-speakers1" href="/speakers">
              SPEAKERS
            </a>
            <a className="Earphone-earphones1" href="/earphones">
              EARPHONES
            </a>
          </nav>
          <div className="cart-icon" onClick={() => setCartOpen(true)}>
            <FaShoppingCart />
          </div>
          <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </header>

        <section className="page-title">
          <h1>EARPHONES</h1>
        </section>
      </div>

      <section className="product-section">
        <div className="product-inner">
          <div className="product-image">
            {" "}
            <img className="img0" src={earphonee} alt={earphonee} />
          </div>
          <div className="product-text">
            <p className="new-product">NEW PRODUCT</p>
            <h2>YX1 WIRELESS EARPHONES</h2>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/earphone1")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="Earphone-categories">
        <div className="Earphone-category-card">
          <div className="Earphone-cat-img">
            <img className="cat1" src={group15} alt={group15} />
          </div>
          <h3>HEADPHONES</h3>
          <a href="/checkout" className="Earphone-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="Earphone-category-card">
          <div className="Earphone-cat-img">
            <img className="cat2" src={group14} alt={group14} />
          </div>
          <h3>SPEAKERS</h3>
          <a href="/checkout" className="Earphone-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="Earphone-category-card">
          <div className="Earphone-cat-img">
            <img className="cat3" src={group6} alt={group6} />
          </div>
          <h3>EARPHONES</h3>
          <a href="/checkout" className="Earphone-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>
      </section>

      <section className="Earphone-info">
        <div className="Earphone-info-text">
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
        <div className="Earphone-info-img">
          <img src={bitmap4} alt={bitmap4} />
        </div>
      </section>

      <footer className="Earphone-footer">
        <div className="Earphone-footer-top">
          <div className="Earphone-logo">audiophile</div>
          <nav className="Earphone-footer-nav">
            <a className="Earphone-headphone-home" href="/">
              HOME
            </a>
            <a className="Earphone-headphones" href="/headphones">
              HEADPHONES
            </a>
            <a className="Earphone-speakers" href="/speakers">
              SPEAKERS
            </a>
            <a className="Earphone-earphones" href="/earphones">
              EARPHONES
            </a>
          </nav>
        </div>
        <p className="Earphone-footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="Earphone-footer-bottom">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="Earphone-socials">
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

export default EarphonePage;
