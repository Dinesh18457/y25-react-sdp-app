import React from "react";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function About() {
  return (
    <div className="page-container">
      <MainNavBar />

      <div className="content-box">
        <h2>About Digital Library 📚</h2>

        <p>
          The Digital Library System is a modern web-based platform designed to
          provide students with easy access to academic resources anytime and anywhere.
        </p>

        <p>
          This system enables users to explore department-wise study materials
          such as Engineering, Medical, Law, Commerce, and Science resources
          in a structured and user-friendly environment.
        </p>

        <h3>🎯 Key Features</h3>
        <ul>
          <li>Department-based resource browsing</li>
          <li>Instant access to books in PDF format</li>
          <li>Personalized "My Books" section</li>
          <li>Secure user login system</li>
          <li>Admin-managed digital resources</li>
        </ul>

        <h3>📘 Purpose</h3>
        <p>
          The goal of this system is to eliminate the need for physical libraries
          and provide a centralized digital platform where students can learn,
          explore, and access knowledge effortlessly.
        </p>

        <h3>🚀 Vision</h3>
        <p>
          To create a smart and accessible academic ecosystem that empowers
          students through technology and digital learning resources.
        </p>

      </div>
    </div>
  );
}

export default About;