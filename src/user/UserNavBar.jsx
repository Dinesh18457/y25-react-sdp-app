import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

function UserNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar user-navbar">
      <h2>User Dashboard</h2>

      <div className="nav-links">
        <Link to="/user">Home</Link>
        <Link to="/user/resources">Resources</Link>
        <Link to="/user/borrow">Borrow</Link>
        <Link to="/user/borrowings">My Books</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default UserNavBar;