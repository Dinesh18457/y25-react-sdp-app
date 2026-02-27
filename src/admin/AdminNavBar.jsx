import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar admin-navbar">
      <h2>Admin Panel</h2>

      <div className="nav-links">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/add">Add Resource</Link>
        <Link to="/admin/resources">Resources</Link>
        <Link to="/admin/users">Users</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default AdminNavBar;