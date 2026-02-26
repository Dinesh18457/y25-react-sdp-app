import React from "react";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function Home() {
  return (
    <div className="page-container home-page">
      <MainNavBar />

      <div className="hero-section">
        <h1>📚 Welcome to Digital Library</h1>
        <p>Explore Books, Manage Resources & Learn Smart</p>
      </div>
    </div>
  );
}

export default Home;