import React, { useState } from "react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className={`auth-inner ${isSignup ? "signup" : "login"}`}>
          <Login switchToSignup={() => setIsSignup(true)} />
          <Signup switchToLogin={() => setIsSignup(false)} />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
