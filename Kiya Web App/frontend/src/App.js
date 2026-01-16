import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedCategories from "./Components/FeaturedCategories";
import Bestsellers from "./Components/Bestsellers";
import WhyChooseUs from "./Components/WhyChooseUs";
import Footer from "./Components/Footer";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProductsPage from "./Components/ProductsPage";
import WishlistPage from "./Components/WishlistPage";
import CategoryPage from "./Components/CategoryPage";
import CartPage from "./Components/CartPage";

import AuthPage from "./Pages/AuthPage";

/* Admin Panel */
import ProductsList from "./admin/ProductsList";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedCategories />
              <Bestsellers />
              <WhyChooseUs />
            </>
          }
        />

        <Route path="/auth" element={<AuthPage />} />


        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/admin" element={<Navigate to="/admin/products" />} />
        <Route path="/admin/products" element={<ProductsList />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
