import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function AdminSidebar() {
  return (
    <div className="sidebar admin-sidebar">
      <h2>Admin Panel</h2>

      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/add">Add Resource</Link>
      <Link to="/admin/resources">Resources</Link>
      <Link to="/admin/users">Users</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

export default AdminSidebar;