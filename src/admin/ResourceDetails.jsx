import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function ResourceDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const resource = location.state?.resource;

  if (!resource) {
    return (
      <div className="admin-page-wrapper">
        <AdminNavBar />
        <main className="admin-main">
          <section className="admin-panel-card">
            <div className="admin-card-header">
              <h3>Resource Not Found</h3>
              <span>No data was passed for resource ID: {id}</span>
            </div>

            <p className="admin-page-text" style={{ marginBottom: "20px" }}>
              Please go back to the resources page and open the item again.
            </p>

            <button
              className="admin-primary-btn"
              onClick={() => navigate("/admin/resources")}
            >
              Back to Resources
            </button>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <section className="admin-page-header">
          <p className="admin-eyebrow">Resource Details</p>
          <h1>{resource.title}</h1>
          <p className="admin-page-text">
            View detailed information about the selected SmartLib resource.
          </p>
        </section>

        <section className="admin-panel-card">
          <div className="resource-details-grid">
            <div className="resource-detail-item">
              <span>ID</span>
              <strong>{resource.id}</strong>
            </div>

            <div className="resource-detail-item">
              <span>Department</span>
              <strong>{resource.department}</strong>
            </div>

            <div className="resource-detail-item">
              <span>Type</span>
              <strong>{resource.type}</strong>
            </div>

            <div className="resource-detail-item">
              <span>Status</span>
              <strong>{resource.status}</strong>
            </div>

            <div className="resource-detail-item">
              <span>Author</span>
              <strong>{resource.author}</strong>
            </div>
          </div>

          <div className="resource-description-box">
            <h3>Description</h3>
            <p>{resource.description}</p>
          </div>

          <div className="resource-action-row">
            <button
              className="admin-primary-btn"
              onClick={() => navigate("/admin/resources")}
            >
              Back to Resources
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResourceDetails;