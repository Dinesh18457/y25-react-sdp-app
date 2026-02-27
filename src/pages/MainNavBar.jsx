import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MainNavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Digital Library</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default MainNavBar;