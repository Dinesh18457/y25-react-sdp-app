import React from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function AdminHome() {
  return (
    <div>
      <AdminNavBar />

      <div className="admin-content">
        <h2>Welcome Admin</h2>
        <p>Manage users and resources here.</p>
      </div>
    </div>
  );
}

export default AdminHome;