import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategories.css";

import cat1 from "../assets/lips.jpg";
import cat2 from "../assets/face.jpg";
import cat3 from "../assets/eyes.jpg";

function FeaturedCategories() {
  return (
    <section className="featured-categories" data-aos="fade-up">
      <h2 data-aos="fade-right">Featured Categories</h2>

      <div className="categories-container">
        <Link
          to="/category/lips"
          className="category-card"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src={cat1} alt="Lips" />
          <h3>Lips</h3>
        </Link>

        <Link
          to="/category/face"
          className="category-card"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src={cat2} alt="Face" />
          <h3>Face</h3>
        </Link>

        <Link
          to="/category/eyes"
          className="category-card"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src={cat3} alt="Eyes" />
          <h3>Eyes</h3>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedCategories;
