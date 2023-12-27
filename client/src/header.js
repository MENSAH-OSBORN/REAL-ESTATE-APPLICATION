import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Header() {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate("/agentsignup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <header className="title">
      <h1 className="TITLE">JamesEdition</h1>
      <div className="types">
        <li>Houses</li>
        <li>Lands</li>
        <li>Apartments</li>
        <li>Office Spaces</li>
        <li>Commercial</li>
      </div>
      <div className="options">
        <button onClick={handleSellClick}>SELL</button>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignUpClick}>Signup</button>
      </div>
    </header>
  );
}
