import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

function UserSidebar() {
  return (
    <div className="sidebar user-sidebar">
      <h2>User Dashboard</h2>

      <Link to="/user">Home</Link>
      <Link to="/user/resources">Resources</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

export default UserSidebar;