import React from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function Resources() {
  const resourceList = [
    { id: 1, title: "Digital Electronics Handbook", dept: "Engineering" },
    { id: 2, title: "Human Anatomy Notes", dept: "Medical" },
    { id: 3, title: "Business Law Fundamentals", dept: "Law" },
    { id: 4, title: "Financial Accounting Basics", dept: "Commerce" },
  ];

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <div className="admin-panel-card">
          <div className="admin-card-header">
            <h3>Resources</h3>
            <span>Manage all uploaded academic materials</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Resource Name</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resourceList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.dept}</td>
                    <td>
                      <button className="admin-table-btn">View</button>
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

export default Resources;