import React from "react";
import "./SpeakerDetails2.css";
import speak5 from "../assets/images3/speaker5.png";
import speak6 from "../assets/images3/speaker6.png";
import speak7 from "../assets/images3/speaker7.png";
import speak8 from "../assets/images3/speaker8.png";
import product5 from "../assets/images3/product-img5.png";
import product6 from "../assets/images3/product-img6.png";
import product7 from "../assets/images3/product-img7.png";
import group15P from "../assets/images/Group 15.png";
import group14P from "../assets/images/Group 14.png";
import group6P from "../assets/images/Group 6.png";
import bitmap4P from "../assets/images/Bitmap4.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModel";
import { useState } from "react";
import { useCart } from "../context/CartContext";


const SpeakerDetails2: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = {
      id: "ZX7 SPEAKER",
      name: "ZX7 SPEAKER",
      price: 2999,
      image: speak5,
      quantity,
    };

    addToCart(product);
    setCartOpen(true);
  };
  return (
    <main className="product-page">
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
          <div className="cart-icon" onClick={() => setCartOpen(true)}>
            <FaShoppingCart />
          </div>
          <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </header>
      </div>

      <section className="product-details">
        <div className="wrapper">
          <div className="product-main">
            <div className="product-image-box">
              <img src={speak5} alt={speak5} className="imgg" />
            </div>

            <div className="product-info">
              <p className="new-label">NEW PRODUCT</p>
              <h2 className="product-title">ZX7 SPEAKER</h2>
              <p className="product-desc">
                Stream high quality sound wirelessly with minimal to no loss. 
                The ZX7 speaker uses high-end audiophile components that represents 
                the top of the line powered speakers for home or studio use.
              </p>
              <p className="product-price">$ 2,999</p>
              <div className="add-to-cart">
                <div className="quantity">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                <button className="add-btn" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="features-section">
            <div className="features">
              <h3>FEATURES</h3>
              <div className="p-cont">
                <p>
                  Featuring a genuine leather head strap and premium earcups,
                  these headphones deliver superior comfort for those who like
                  to enjoy endless listening. It includes intuitive controls
                  designed for any situation. Whether you're taking a business
                  call or just in your own personal space, the auto on/off and
                  pause features ensure that you'll never miss a beat.
                </p>
                <p>
                  The advanced Active Noise Cancellation with built-in equalizer
                  allows you to experience your audio world on your terms. It
                  lets you enjoy your music while being aware of your
                  surroundings when you need to. Designed for those who demand
                  the best in sound and quality.
                </p>
              </div>
            </div>
            <div className="box-items">
              <h3>IN THE BOX</h3>
              <ul>
                <li className="list1">
                  <span>1x</span> Headphone Unit
                </li>
                <li className="list2">
                  <span>2x</span> Replacement Earcups
                </li>
                <li className="list3">
                  <span>1x</span> User Manual
                </li>
                <li className="list4">
                  <span>1x</span> 3.5mm Audio Cable
                </li>
                <li className="list5">
                  <span>1x</span> Travel Bag
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gallery">
          <img className="img0" src={speak6} alt="gallery 1" />
          <img className="img0" src={speak7} alt="gallery 2" />
          <img className="img01" src={speak8} alt="gallery 3" />
        </div>

        <div className="also-like">
          <h3>YOU MAY ALSO LIKE</h3>

          <div className="recommendations">
            <div className="item-container">
              <div className="item">
                <img className="image0" src={product5} alt="XX99 MARK I" />
              </div>
              <div className="item-meta">
                <h4 className="firsth4">XX99 MARK I</h4>
                <button
                  className="see-product"
                  onClick={() => navigate("/product2")}
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>

            <div className="item-container">
              <div className="item">
                <img className="image01" src={product6} alt="XX59" />
              </div>
              <div className="item-meta">
                <h4 className="secondh4">XX59</h4>
                <button
                  className="see-product"
                  onClick={() => navigate("/product3")}
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>

            <div className="item-container">
              <div className="item">
                <img className="image02" src={product7} alt="ZX9 SPEAKER" />
              </div>
              <div className="item-meta">
                <h4 className="thirdh4">ZX9 SPEAKER</h4>
                <button
                  className="see-product"
                  onClick={() => navigate("/speaker1")}
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="categories">
          <div className="category-card">
            <div className="cat-img">
              <img className="cat1" src={group15P} alt={group15P} />
            </div>
            <h3>HEADPHONES</h3>
            <a href="/checkout" className="shop-link">
              SHOP <span>&#8594;</span>
            </a>
          </div>

          <div className="category-card">
            <div className="cat-img">
              <img className="cat2" src={group14P} alt={group14P} />
            </div>
            <h3>SPEAKERS</h3>
            <a href="/checkout" className="shop-link">
              SHOP <span>&#8594;</span>
            </a>
          </div>

          <div className="category-card">
            <div className="cat-img">
              <img className="cat3" src={group6P} alt={group6P} />
            </div>
            <h3>EARPHONES</h3>
            <a href="/checkout" className="shop-link">
              SHOP <span>&#8594;</span>
            </a>
          </div>
        </section>
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
          <img src={bitmap4P} alt={bitmap4P} />
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

export default SpeakerDetails2;
