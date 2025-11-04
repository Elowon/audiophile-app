import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-wrapper">
      <div className="hamburger-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
        <Link to="/headphones" onClick={() => setOpen(false)}>HEADPHONES</Link>
        <Link to="/speakers" onClick={() => setOpen(false)}>SPEAKERS</Link>
        <Link to="/earphones" onClick={() => setOpen(false)}>EARPHONES</Link>
      </nav>

      
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
};

export default HamburgerMenu;
