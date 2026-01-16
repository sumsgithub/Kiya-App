import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './Components/Context/WishlistContext';
import { CartProvider } from'./Context/CartContext';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="537298907572-6qrg7t8261k87kqvoev08e0ssb0tlo7m.apps.googleusercontent.com">
    <BrowserRouter>
    <WishlistProvider>
    <CartProvider>
      <App />
      </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

