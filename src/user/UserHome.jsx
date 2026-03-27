import React from "react";
import { useNavigate } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import "../pages/style.css";
import "./user.css";

function UserHome() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <div className="page-container smartlib-auth-page">
      <UserNavBar />

      <main className="smartlib-user-shell">
        <section className="smartlib-user-hero">
          <div className="smartlib-user-hero-left">
            <p className="smartlib-user-eyebrow">Student Dashboard</p>
            <h1>Welcome back, {loggedInUser.name || "Student"} 👋</h1>
            <p className="smartlib-user-hero-text">
              Access your digital academic workspace, explore department-wise
              learning resources, and continue your learning journey through
              SmartLib.
            </p>

            <div className="smartlib-user-hero-actions">
              <button onClick={() => navigate("/user/resources")}>
                Explore Resources
              </button>
              <button
                className="secondary-btn"
                onClick={() => navigate("/user/borrowings")}
              >
                My Books
              </button>
            </div>
          </div>

          <div className="smartlib-user-profile-card">
            <div className="smartlib-user-profile-top">
              <div className="smartlib-user-avatar-large">
                {(loggedInUser.name || "U").charAt(0).toUpperCase()}
              </div>

              <div>
                <h3>{loggedInUser.name || "User"}</h3>
                <p>{loggedInUser.email || "user@example.com"}</p>
              </div>
            </div>

            <div className="smartlib-user-profile-meta">
              <div>
                <span>Department</span>
                <strong>{loggedInUser.department || "Not Available"}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>Student User</strong>
              </div>
              <div>
                <span>Access</span>
                <strong>Active</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="smartlib-user-stats">
          <div className="smartlib-user-stat-card">
            <span>Resources Available</span>
            <h2>250+</h2>
            <p>Academic books and PDFs</p>
          </div>

          <div className="smartlib-user-stat-card">
            <span>Departments</span>
            <h2>5</h2>
            <p>Structured learning categories</p>
          </div>

          <div className="smartlib-user-stat-card">
            <span>My Library</span>
            <h2>02</h2>
            <p>Currently issued books</p>
          </div>
        </section>

        <section className="smartlib-user-grid">
          <div
            className="smartlib-user-feature-card clickable-card"
            onClick={() => navigate("/user/resources")}
          >
            <div className="smartlib-user-feature-icon">📚</div>
            <h3>Browse Resources</h3>
            <p>
              Explore study materials from Engineering, Medical, Law, Commerce,
              and Science.
            </p>
          </div>

          <div
            className="smartlib-user-feature-card clickable-card"
            onClick={() => navigate("/user/borrowings")}
          >
            <div className="smartlib-user-feature-icon">📖</div>
            <h3>My Books</h3>
            <p>
              View your issued books and keep track of your reading collection.
            </p>
          </div>

          <div className="smartlib-user-feature-card">
            <div className="smartlib-user-feature-icon">🚀</div>
            <h3>Smart Learning</h3>
            <p>
              Access a digital-first library experience designed for faster and
              easier learning.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserHome;