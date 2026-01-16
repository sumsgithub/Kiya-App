import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; 

function Login({ switchToSignup }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      const token = res.data.token;
      const decoded = jwtDecode(token);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decoded));

      setMessage("Login successful!");
      window.location.href = "/admin";
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  // Google login success handler
  const handleGoogleLogin = async (res) => {
    try {
      const decoded = jwtDecode(res.credential);
      console.log("Google user:", decoded);

      

      localStorage.setItem("user", JSON.stringify(decoded));
      setMessage("Google login successful!");
      window.location.href = "/admin";
    } catch (err) {
      console.log(err);
      setMessage("Google login failed");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {message && <p className="msg">{message}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        {/* Google Login Button */}
        <div className="google-btn-container">
          <GoogleLogin onSuccess={handleGoogleLogin} onError={() => setMessage("Google login failed")} />
        </div>

        <p className="switch-text">
          Don’t have an account? <span onClick={switchToSignup}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
