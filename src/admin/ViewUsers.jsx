import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("smartlib_users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("smartlib_users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <section className="admin-page-header">
          <p className="admin-eyebrow">User Management</p>
          <h1>Registered Users</h1>
          <p className="admin-page-text">
            View and manage students registered in the SmartLib platform.
          </p>
        </section>

        <section className="admin-panel-card">
          <div className="admin-card-header">
            <h3>User Directory</h3>
            <span>List of all registered users</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.department}</td>
                      <td>
                        <span className="admin-badge active">{user.status}</span>
                      </td>
                      <td>
                        <button
                          className="admin-table-btn"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                      No users registered yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViewUsers;