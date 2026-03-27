import React from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function Users() {
  const users = [
    { id: 1, name: "Rahul Sharma", role: "Student" },
    { id: 2, name: "Priya Verma", role: "Student" },
    { id: 3, name: "Aman Singh", role: "Student" },
    { id: 4, name: "Neha Patel", role: "Student" },
  ];

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <div className="admin-panel-card">
          <div className="admin-card-header">
            <h3>Users</h3>
            <span>Manage registered platform users</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="admin-table-btn">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Users;