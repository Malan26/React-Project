import React, { useState } from "react";
import Logo from "../assets/laptoplogo2.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        {/* <img src={Logo} alt="Laptop Logo" /> */}
      </div>

      <div className="rightSide" id={openLinks ? "open" : "close"}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>

        {/* <button className="toggleButton" onClick={toggleNavbar}>
          ☰
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;

