import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo*/}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Kiya Logo" className="logo-image" />
        </Link>
      </div>

      {/* Search Bar*/}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>

      {/* Icons */}
      <div className="nav-links">
        {/* Home Icon */}
        <Link to="/">
          <span className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0
                .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c
                .621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504
                1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>
        </Link>

        {/* Products Icon */}
        <Link to="/products">
          <span className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5
                7.5 0 1 0 5.196 5.196a7.5
                7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </Link>

        {/* Wishlist Icon */}
        <Link to="/wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
              0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Link>

        {/* Cart Icon */}
        <Link to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
              1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125
              1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125
              0 0 1 5.513 7.5h12.974c.576 0 1.059.435
              1.119 1.007Z"
            />
          </svg>
        </Link>

        {/* Account Icon */}
        <Link to="/auth" className="account-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0
              12 15.75a7.488 7.488 0 0 0-5.982
              2.975m11.963 0a9 9 0 1 0-11.963
              0M15 9.75a3 3 0 1 1-6 0 3
              3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
