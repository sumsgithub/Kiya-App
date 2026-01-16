import React from "react";
import { useParams } from "react-router-dom";
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

import "./CategoryPage.css";

// Sample product data with their categories
const allProducts = [
  { id: 1, name: "Velvet Matte Lipstick", price: 15, category: "lips", image: product1 },
  { id: 2, name: "Glow Liquid Foundation", price: 25, category: "face", image: product2 },
  { id: 3, name: "Rose Palette", price: 18, category: "eyes", image: product3 },
  { id: 4, name: "Volumizing Mascara", price: 12, category: "eyes", image: product4 },
  { id: 5, name: "Cheeky Blush", price: 10, category: "face", image: product5 },
  { id: 6, name: "Eyeliner", price: 17.25, category: "eyes", image: product6},
  { id: 7, name: "Lipgloss", price:14, category: "lips", image: product7},
  { id: 8, name: "Highlighter", price: 18, category: "face", image: product8},
  { id: 9, name: "Compact", price: 20, category: "face", image: product9},
  { id: 10, name: "Liquid Cocealer", price: 22, category: "face", image: product10},
  { id: 11, name: "Face Primer", price:19, category: "face", image: product11},
  { id: 12, name: "Liquid Lipstick", price: 20, category: "lips", image: product12},
  { id: 13, name: "Lilac Eye Palette", price:29, category: "eyes", image: product13},
  { id: 14, name: "Eyebrow", price: 18, category: "eyes", image: product14},
  { id: 15, name: "Warm Eye Palette", price: 27, category: "eyes", image: product15},
];

function CategoryPage() {
  const { categoryName } = useParams();

  const filteredProducts = allProducts.filter(
    (product) => product.category === categoryName
  );

  return (
    <section className="category-page">
      <h2>{categoryName.toUpperCase()} Products</h2>
      <div className="category-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="category-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>AED{product.price}.00</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
