import React from "react";
import Laptopback from "../assets/bc.jpg.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Laptopback})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to TechZone Laptops, your one-stop destination forhigh-performance laptops that fit every lifestyle.
          Whether you’re a student, professional, gamer, or creator, we bring you the latest and most reliable laptops from top brands — all in one place.
        </p>
      </div>
    </div>
  );
}

export default About;