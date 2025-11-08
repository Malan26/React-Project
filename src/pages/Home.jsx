import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/laptopFront.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Find Your Products</h1>
        <p>Explore top brands and best prices!</p>
        <Link to= "/menu">
        <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

 





