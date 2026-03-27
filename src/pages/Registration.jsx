import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "./style.css";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  });

  const capitalizeName = (value) => {
    return value.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData({ ...formData, name: capitalizeName(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem("smartlib_users")) || [];

    const alreadyExists = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (alreadyExists) {
      alert("User already registered with this email.");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
      status: "Active",
    };

    localStorage.setItem(
      "smartlib_users",
      JSON.stringify([...existingUsers, newUser])
    );

    alert("Registration successful!");
    navigate("/user-login");
  };

  return (
    <div className="page-container smartlib-register-page">
      <MainNavBar />

      <div className="smartlib-register-wrapper">
        <div className="smartlib-register-card">
          <p className="smartlib-register-badge">Student Registration</p>
          <h2>Create Account</h2>
          <p className="smartlib-register-subtitle">
            Join SmartLib to access digital resources, academic materials, and
            department-wise study content.
          </p>

          <form onSubmit={handleRegister} className="smartlib-register-form">
            <div className="smartlib-input-wrap">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="smartlib-input-wrap">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="smartlib-input-wrap">
              <label>Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option>Engineering</option>
                <option>Medical</option>
                <option>Law</option>
                <option>Commerce</option>
                <option>Science</option>
              </select>
            </div>

            <button type="submit" className="smartlib-register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;