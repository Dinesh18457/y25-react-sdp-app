import React from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function UserHome() {
  const username = localStorage.getItem("username") || "Student";

  return (
    <div>
      <UserNavBar />

      <div className="user-content">

        <div className="dashboard-card">
          <h2>Welcome back, {username} 👋</h2>
          <p>
            Explore your digital library anytime, anywhere.
            Access resources from multiple departments,
            open books instantly, and continue your learning journey.
          </p>
        </div>

        <div className="dashboard-card">
          <h3>📚 What you can do here:</h3>
          <ul>
            <li>Browse department-wise study materials</li>
            <li>Access Engineering, Medical, Law & more</li>
            <li>Open books instantly in PDF format</li>
            <li>Manage your personal reading collection</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>🚀 Start Exploring</h3>
          <p>
            Head over to the <b>Resources</b> section to discover
            study materials tailored to your department.
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserHome;