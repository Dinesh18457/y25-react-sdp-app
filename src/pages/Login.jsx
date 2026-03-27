import React from "react";
import { Link } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function Login() {
  return (
    <div className="page-container smartlib-auth-page">
      <MainNavBar />

      <section className="smartlib-auth-shell">
        <div className="smartlib-auth-header">
          <p className="smartlib-auth-eyebrow">Authentication</p>
          <h1>Select Login Type</h1>
          <p className="smartlib-auth-description">
            Access SmartLib through the appropriate workspace. Choose an admin
            dashboard for system control or a user workspace for resource access.
          </p>
        </div>

        <div className="smartlib-auth-options">
          <Link to="/admin-login" className="smartlib-auth-option">
            <div className="smartlib-auth-option-top">
              <span className="smartlib-auth-icon">01</span>
              <span className="smartlib-auth-tag">Restricted Access</span>
            </div>

            <h2>Admin Login</h2>
            <p>
              Manage departments, upload resources, maintain user records, and
              oversee platform operations.
            </p>

            <div className="smartlib-auth-footer">
              <span>Open Admin Workspace</span>
              <span className="smartlib-auth-arrow">→</span>
            </div>
          </Link>

          <Link to="/user-login" className="smartlib-auth-option">
            <div className="smartlib-auth-option-top">
              <span className="smartlib-auth-icon">02</span>
              <span className="smartlib-auth-tag">Student Access</span>
            </div>

            <h2>User Login</h2>
            <p>
              Browse academic materials, access digital books, and explore
              department-wise learning resources.
            </p>

            <div className="smartlib-auth-footer">
              <span>Open User Workspace</span>
              <span className="smartlib-auth-arrow">→</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Login;