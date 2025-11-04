import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./SpeakersPage.css";
import bitmap4 from "../assets/images/Bitmap4.png";
import removebg3 from "../assets/images/image-removebg-preview.png";
import removebg4 from "../assets/images3/image-removebg-preview3.png";
import group15 from "../assets/images/Group 15.png";
import group14 from "../assets/images/Group 14.png";
import group6 from "../assets/images/Group 6.png";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModel";
import { useState } from "react";

const SpeakersPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="SpeakersPage-page">
      <div className="SpeakersPage-container">
        <header className="SpeakersPage-header">
          <div className="SpeakersPage-logo">audiophile</div>
          <nav className="SpeakersPage-nav">
            <a className="SpeakersPage-home1" href="/">
              HOME
            </a>
            <a className="SpeakersPage-headphones1" href="/headphones">
              HEADPHONES
            </a>
            <a className="SpeakersPage-speakers1" href="/speakers">
              SPEAKERS
            </a>
            <a className="SpeakersPage-earphones1" href="/earphones">
              EARPHONES
            </a>
          </nav>
          <div className="cart-icon" onClick={() => setCartOpen(true)}>
            <FaShoppingCart />
          </div>
          <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </header>

        <section className="page-title">
          <h1>SPEAKERS</h1>
        </section>
      </div>

      <section className="product-section">
        <div className="product-inner">
          <div className="product-image">
            {" "}
            <img className="img1" src={removebg3} alt={removebg3} />
          </div>
          <div className="product-text">
            <p className="new-product">NEW PRODUCT</p>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/speaker1")}
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
            <img className="img2" src={removebg4} alt={removebg4} />
          </div>
          <div className="product-text">
            <h2>ZX7 SPEAKER</h2>
            <p>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button
              className="see-product-btn"
              onClick={() => navigate("/speaker2")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="SpeakersPage-categories">
        <div className="SpeakersPage-category-card">
          <div className="SpeakersPage-cat-img">
            <img className="cat1" src={group15} alt={group15} />
          </div>
          <h3>HEADPHONES</h3>
          <a href="/checkout" className="SpeakersPage-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="SpeakersPage-category-card">
          <div className="SpeakersPage-cat-img">
            <img className="cat2" src={group14} alt={group14} />
          </div>
          <h3>SPEAKERS</h3>
          <a href="/checkout" className="SpeakersPage-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="SpeakersPage-category-card">
          <div className="SpeakersPage-cat-img">
            <img className="cat3" src={group6} alt={group6} />
          </div>
          <h3>EARPHONES</h3>
          <a href="/checkout" className="SpeakersPage-shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>
      </section>

      <section className="SpeakersPage-info">
        <div className="SpeakersPage-info-text">
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
        <div className="SpeakersPage-info-img">
          <img src={bitmap4} alt={bitmap4} />
        </div>
      </section>

      <footer className="SpeakersPage-footer">
        <div className="SpeakersPage-footer-top">
          <div className="SpeakersPage-logo">audiophile</div>
          <nav className="SpeakersPage-footer-nav">
            <a className="SpeakersPage-headphone-home" href="/">
              HOME
            </a>
            <a className="SpeakersPage-headphones" href="/headphones">
              HEADPHONES
            </a>
            <a className="SpeakersPage-speakers" href="/speakers">
              SPEAKERS
            </a>
            <a className="SpeakersPage-earphones" href="/earphones">
              EARPHONES
            </a>
          </nav>
        </div>
        <p className="SpeakersPage-footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="SpeakersPage-footer-bottom">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="SpeakersPage-socials">
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

export default SpeakersPage;
