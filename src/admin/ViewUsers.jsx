import React from "react";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

function ViewUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="dashboard-layout">
      <AdminSidebar />

      <div className="dashboard-content">
        <h2>Registered Users</h2>

        {users.length === 0 ? (
          <p>No users registered yet</p>
        ) : (
          users.map((user, index) => (
            <div key={index} className="dashboard-card">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewUsers;