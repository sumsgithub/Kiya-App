import React, { useState, useEffect } from "react";
import "./CartPage.css";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              {/* Product info */}
              <div className="cart-item-content">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: AED {item.price * item.quantity}.00</p>
              </div>

              {/* Remove button */}
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary-container">
          <div className="cart-summary-box">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>AED {total}.00</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>AED 10.00</span>
            </div>

            <hr />

            <div className="summary-row total-row">
              <span>Total</span>
              <span>AED {total + 10}.00</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
