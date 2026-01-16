import React from "react";
import product1 from "../assets/lipstick.jpg";
import product2 from "../assets/foundation.jpg";
import product3 from "../assets/eyeshadow.jpg";
import product4 from "../assets/mascara.jpg";
import product5 from "../assets/blush.jpg";
import product6 from "../assets/eyeliner.jpg";
import product7 from "../assets/lipgloss.jpg";
import product8 from "../assets/highlighter.jpg";
import product9 from "../assets/compact.jpeg";
import product10 from "../assets/cocealer.jpeg";
import product11 from "../assets/primer.jpeg";
import product12 from "../assets/liqlip.jpeg";
import product13 from "../assets/ep2.jpeg";
import product14 from "../assets/eyebrow.jpg";
import product15 from "../assets/ep3.jpeg";

import "./ProductsPage.css";
import { useWishlist } from "./Context/WishlistContext";

const products = [
  { id: 1, name: "Velvet Matte Lipstick", price: 15, image: product1 },
  { id: 2, name: "Glow Liquid Foundation", price: 25, image: product2 },
  { id: 3, name: "Rose Palette", price: 18, image: product3 },
  { id: 4, name: "Volumizing Mascara", price: 12, image: product4 },
  { id: 5, name: "Cheeky Blush", price: 10, image: product5 },
  { id: 6, name: "Eyeliner", price: 17.25, image: product6 },
  { id: 7, name: "Lipgloss", price: 14, image: product7 },
  { id: 8, name: "Highlighter", price: 18, image: product8 },
  { id: 9, name: "Compact", price: 20, image: product9 },
  { id: 10, name: "Liquid Concealer", price: 22, image: product10 },
  { id: 11, name: "Face Primer", price: 19, image: product11 },
  { id: 12, name: "Liquid Lipstick", price: 20, image: product12 },
  { id: 13, name: "Lilac Eye Palette", price: 29, image: product13 },
  { id: 14, name: "Eyebrow", price: 18, image: product14 },
  { id: 15, name: "Warm Eye Palette", price: 27, image: product15 },
];

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

/* TOAST MESSAGE FUNCTION */
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

function ProductsPage() {
  const { addToWishlist } = useWishlist();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((i) => i.id === product.id);

    if (item) item.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show toast message
    showToast(`${product.name} added to cart 🛒`);
  };

  return (
    <section className="products-page" data-aos="fade-up">
      <h2 data-aos="fade-down">Our Products</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={product.id}
            data-aos="fade-up"
            data-aos-offset="120"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            {/* Wishlist Button */}
            <button
              className="wishlist-btn"
              onClick={() => {
                addToWishlist(product);
                showToast("Added to wishlist ❤️");
              }}
            >
              <WishlistIcon />
            </button>

            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>AED {product.price}.00</p>

            {/* Add to Cart Button */}
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
