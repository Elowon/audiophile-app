import "./HomePage.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import bitmap from "../assets/images/Bitmap.png";
import group15 from "../assets/images/Group 15.png";
import group14 from "../assets/images/Group 14.png";
import group6 from "../assets/images/Group 6.png";
import removebg from "../assets/images/image-removebg-preview.png";
import bitmap2 from "../assets/images/Bitmap2.png";
import bitmap3 from "../assets/images/Bitmap3.png";
import bitmap4 from "../assets/images/Bitmap4.png";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModel";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

const HomePage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <main className="homepage">
      <div className="container">
        <header className="header">
          <div className="logo">audiophile</div>
          <nav className="nav">
            <a className="home1" href="/">
              HOME
            </a>
            <a className="headphones1" href="/headphones">
              HEADPHONES
            </a>
            <a className="speakers1" href="/speakers">
              SPEAKERS
            </a>
            <a className="earphones1" href="/earphones">
              EARPHONES
            </a>
          </nav>
          <HamburgerMenu />
          <div className="cart-icon" onClick={() => setCartOpen(true)}>
            <FaShoppingCart />
          </div>
          <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </header>

        <section className="hero">
          <div className="hero-content">
            <p className="overline">NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p className="description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate("/product1")}
            >
              {" "}
              SEE PRODUCT
            </button>
          </div>
          <div className="hero-image">
            <img src={bitmap} alt={bitmap} />
          </div>
        </section>
      </div>

      <section className="categories">
        <div className="category-card">
          <div className="cat-img">
            <img className="cat1" src={group15} alt={group15} />
          </div>
          <h3>HEADPHONES</h3>
          <a href="/checkout" className="shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="category-card">
          <div className="cat-img">
            <img className="cat2" src={group14} alt={group14} />
          </div>
          <h3>SPEAKERS</h3>
          <a href="/checkout" className="shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>

        <div className="category-card">
          <div className="cat-img">
            <img className="cat3" src={group6} alt={group6} />
          </div>
          <h3>EARPHONES</h3>
          <a href="/checkout" className="shop-link">
            SHOP <span>&#8594;</span>
          </a>
        </div>
      </section>

      <section className="featured">
        <div className="zx9">
          <div className="zx9-image">
            <img src={removebg} alt={removebg} />
          </div>
          <div className="zx9-content">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn-dark" onClick={() => navigate("/speaker1")}>
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="zx7">
          <div className="zx7-bg">
            <img src={bitmap2} alt={bitmap2} />
          </div>
          <div className="zx7-content">
            <h2>ZX7 SPEAKER</h2>
            <button
              className="btn-outline"
              onClick={() => navigate("/speaker2")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div className="yx1">
          <div className="yx1-left">
            <img src={bitmap3} alt={bitmap3} />
          </div>
          <div className="yx1-right">
            <h2>YX1 EARPHONES</h2>
            <button
              className="btn-outline"
              onClick={() => navigate("/earphone1")}
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="info">
        <div className="info-text">
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
        <div className="info-img">
          <img src={bitmap4} alt={bitmap4} />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="logo">audiophile</div>
          <nav className="footer-nav">
            <a className="home" href="/">
              HOME
            </a>
            <a className="headphones" href="/headphones">
              HEADPHONES
            </a>
            <a className="speakers" href="/speakers">
              SPEAKERS
            </a>
            <a className="earphones" href="/earphones">
              EARPHONES
            </a>
          </nav>
        </div>
        <p className="footer-text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="footer-bottom">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="socials">
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

export default HomePage;
