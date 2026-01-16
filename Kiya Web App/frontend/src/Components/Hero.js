import React, { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero Banner"
          className={`hero-image ${
            index === currentSlide ? "active" : ""
          }`}
        />
      ))}

      <div className="hero-content">
        <h1>Glow Naturally</h1>
        <h3>Explore premium makeup collections</h3>
        <a href="/products" className="hero-button">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
