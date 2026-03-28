import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "./style.css";

function UserLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("smartlib_users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      alert("Login successful!");
      navigate("/user");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="page-container smartlib-login-page">
      <MainNavBar />

      <div className="smartlib-login-wrapper">
        <div className="smartlib-login-card">
          <p className="smartlib-login-badge">Student Access</p>
          <h2>User Login</h2>
          <p className="smartlib-login-subtitle">
            Sign in to access your SmartLib account and department-wise resources.
          </p>

          <form onSubmit={handleLogin} className="smartlib-login-form">
            <div className="smartlib-input-wrap">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="smartlib-input-wrap">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="smartlib-login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;