import React from "react";
import { Link } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import "../pages/style.css";

function Login() {
  return (
    <div className="page-container login-page">
      <MainNavBar />

      <div className="card-box">
        <h2>Select Login Type</h2>

        <Link to="/admin-login">
          <button>Admin Login</button>
        </Link>

        <Link to="/user-login">
          <button>User Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;