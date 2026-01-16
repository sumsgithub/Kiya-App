import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us" data-aos="fade-up">
      <h2 data-aos="fade-down">Why Choose Kiya?</h2>

      <div className="features-grid">
        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>High-Quality Products</h3>
          <p>We offer premium beauty products that are safe and long-lasting.</p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Cruelty-Free</h3>
          <p>All our products are ethically sourced and cruelty-free.</p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3>Fast & Reliable Shipping</h3>
          <p>Get your favorite products delivered to your doorstep quickly.</p>
        </div>

        <div
          className="feature-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3>Customer Satisfaction</h3>
          <p>We prioritize your happiness with excellent support and quality.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
