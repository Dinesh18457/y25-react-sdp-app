import React from "react";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function About() {
  const features = [
    "Department-based resource browsing",
    "Instant access to books in PDF format",
    'Personalized "My Books" section',
    "Secure user login and registration system",
    "Admin-managed digital resources",
    "Clean and user-friendly interface",
  ];

  return (
    <div className="page-container smartlib-about-page">
      <MainNavBar />

      <div className="smartlib-about-wrapper">
        <div className="smartlib-about-box">
          <h1 className="smartlib-about-title">About SmartLib App 📚</h1>

          <p className="smartlib-about-text">
            SmartLib App is a modern digital library platform developed to give
            students easy access to academic resources anytime and anywhere.
            It creates a smart and centralized learning space where users can
            discover, read, and manage study materials efficiently.
          </p>

          <p className="smartlib-about-text">
            The system supports multiple departments including Engineering,
            Medical, Law, Commerce, and Science, helping students explore
            educational content in a structured and user-friendly environment.
          </p>

          <div className="smartlib-about-grid">
            <div className="smartlib-about-card">
              <h3>🎯 Key Features</h3>
              <ul className="smartlib-feature-list">
                {features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="smartlib-about-card">
              <h3>📘 Purpose</h3>
              <p>
                The goal of SmartLib App is to reduce dependency on physical
                libraries by providing a centralized digital platform where
                students can learn, explore, and access knowledge effortlessly.
              </p>
            </div>

            <div className="smartlib-about-card">
              <h3>🚀 Vision</h3>
              <p>
                Our vision is to create a smart, accessible, and technology-driven
                academic ecosystem that empowers students through digital
                learning resources.
              </p>
            </div>

            <div className="smartlib-about-card smartlib-about-highlight">
              <h3>💡 Why SmartLib?</h3>
              <p>
                SmartLib App combines convenience, accessibility, and modern
                technology to make academic resources available in one place,
                making learning simpler, faster, and more effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;