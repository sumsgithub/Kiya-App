import React from "react";
import { useWishlist } from "./Context/WishlistContext";
import "./WishlistPage.css";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items added yet 💔</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>AED{item.price}.00</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistPage;
