import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function AdminNavBar() {
  return (
    <nav className="admin-navbar">
      <div className="admin-logo">Admin Panel</div>

      <div className="admin-nav-links">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/add">Add Resource</Link>
        <Link to="/admin/resources">Resources</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default AdminNavBar;