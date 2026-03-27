import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function ViewResources() {
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: "Digital Electronics Handbook",
      department: "Engineering",
      type: "PDF",
      status: "Published",
      author: "R. Anand",
      description: "A complete handbook covering digital electronics concepts, logic gates, flip-flops, and sequential circuits."
    },
    {
      id: 2,
      title: "Human Anatomy Notes",
      department: "Medical",
      type: "PDF",
      status: "Published",
      author: "Dr. Meera Shah",
      description: "Detailed study notes for human anatomy including body systems, organs, and medical diagrams."
    },
    {
      id: 3,
      title: "Business Law Fundamentals",
      department: "Law",
      type: "E-Book",
      status: "Draft",
      author: "A. Kumar",
      description: "Introductory material covering contracts, legal systems, and business law principles."
    },
    {
      id: 4,
      title: "Financial Accounting Basics",
      department: "Commerce",
      type: "PDF",
      status: "Published",
      author: "S. Iyer",
      description: "Core accounting concepts including journal entries, ledgers, and balance sheets."
    },
  ];

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <section className="admin-page-header">
          <p className="admin-eyebrow">Library Management</p>
          <h1>Available Resources</h1>
          <p className="admin-page-text">
            Review, organize, and manage all academic resources in SmartLib.
          </p>
        </section>

        <section className="admin-panel-card">
          <div className="admin-card-header">
            <h3>Resource Library</h3>
            <span>All uploaded books, PDFs, and learning materials</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Resource Title</th>
                  <th>Department</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.id}>
                    <td>{resource.id}</td>
                    <td>{resource.title}</td>
                    <td>{resource.department}</td>
                    <td>{resource.type}</td>
                    <td>
                      <span
                        className={
                          resource.status === "Published"
                            ? "admin-badge active"
                            : "admin-badge draft"
                        }
                      >
                        {resource.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="admin-table-btn"
                        onClick={() =>
                          navigate(`/admin/resources/${resource.id}`, {
                            state: { resource },
                          })
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViewResources;