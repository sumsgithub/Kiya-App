import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About the Brand*/}
        <div className="footer-brand">
          <h2>Kiya</h2>
          <p>Beauty products that empower you every day.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#bestsellers">Bestsellers</a></li>
            <li><a href="#why-choose-us">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@kiya.com</p>
          <p>Phone: +971 50 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Kiya. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
