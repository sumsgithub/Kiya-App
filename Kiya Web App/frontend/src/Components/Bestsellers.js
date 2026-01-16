import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useWishlist } from "../Components/Context/WishlistContext";
import "./Bestsellers.css";

import product1 from "../assets/lipstick.jpg";
import product2 from "../assets/foundation.jpg";
import product3 from "../assets/eyeshadow.jpg";
import product4 from "../assets/mascara.jpg";
import product5 from "../assets/blush.jpg";

/* Toast Message */
const showToast = (message) => {
  const existingToast = document.getElementById("toast-notification");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.innerText = message;

  Object.assign(toast.style, {
    position: "fixed",
    top: "90px",
    right: "24px",
    padding: "14px 18px",
    background: "linear-gradient(135deg, #ff4081, #ff80ab)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    zIndex: "9999",
    opacity: "0",
    transform: "translateX(40px)",
    transition: "all 0.35s ease",
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    setTimeout(() => toast.remove(), 300);
  }, 2300);
};


const WishlistIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
      -1.935 0-3.597 1.126-4.312 2.733
      -.715-1.607-2.377-2.733-4.313-2.733
      C5.1 3.75 3 5.765 3 8.25
      c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

function Bestsellers() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useWishlist();

  const products = [
    { id: 1, name: "Velvet Matte Lipstick", price: 15, image: product1 },
    { id: 2, name: "Glow Liquid Foundation", price: 25, image: product2 },
    { id: 3, name: "Rose Palette", price: 18, image: product3 },
    { id: 4, name: "Volumizing Mascara", price: 12, image: product4 },
    { id: 5, name: "Cheeky Blush", price: 10, image: product5 },
  ];

  return (
    <section className="bestsellers" data-aos="fade-up">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Our Bestsellers
      </h2>

      <div className="bestseller-grid">
        {products.map((p, index) => (
          <div
            className="bestseller-card"
            key={p.id}
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            {/* Wishlist Button */}
            <button
              className="wishlist-btn"
              onClick={() => {
                addToWishlist(p);
                showToast("Added to wishlist ❤️");
              }}
              aria-label="Add to wishlist"
            >
              <WishlistIcon />
            </button>

            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>AED {p.price}.00</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => {
                addToCart(p);
                showToast("Added to cart 🛒");
              }}
              className="add-btn"
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;
