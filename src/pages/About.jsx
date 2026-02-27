import React from "react";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function About() {
  return (
    <div className="page-container">
      <MainNavBar />

      <div className="content-box">
        <h2>About Digital Library</h2>
        <p>
          This system allows users to borrow books and admins to manage resources.
        </p>
      </div>
    </div>
  );
}

export default About;