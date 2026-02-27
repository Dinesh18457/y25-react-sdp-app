import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "./style.css";

function UserLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate("/user");
    } else {
      alert("Invalid Credentials or Not Registered");
    }
  };

  return (
    <>
      <MainNavBar />
      <motion.div
        className="card-box"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>User Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </motion.div>
    </>
  );
}

export default UserLogin;