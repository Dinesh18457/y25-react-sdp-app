import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="page-container smartlib-auth-page">
      <MainNavBar />

      <section className="smartlib-form-shell">
        <div className="smartlib-form-panel">
          <div className="smartlib-form-left">
            <p className="smartlib-auth-eyebrow">Admin Authentication</p>
            <h1>Secure Admin Access</h1>
            <p>
              Sign in to access the SmartLib administration environment. This
              workspace is intended for authorized administrators only.
            </p>

            <div className="smartlib-form-info">
              <div>
                <span className="smartlib-info-label">Access Level</span>
                <strong>Administrator</strong>
              </div>
              <div>
                <span className="smartlib-info-label">Security</span>
                <strong>Credential Protected</strong>
              </div>
            </div>
          </div>

          <div className="smartlib-form-right">
            <h2>Admin Login</h2>

            <div className="smartlib-enterprise-input">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="smartlib-enterprise-input">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="smartlib-enterprise-btn" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;