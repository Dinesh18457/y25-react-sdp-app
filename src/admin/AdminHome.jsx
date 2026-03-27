import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <section className="admin-hero">
          <div className="admin-hero-left">
            <p className="admin-eyebrow">Administration Workspace</p>
            <h1>Welcome Back, Admin</h1>
            <p className="admin-hero-text">
              Manage users, monitor digital resources, and control the SmartLib
              platform from one centralized dashboard.
            </p>
          </div>

          <div className="admin-hero-right">
            <div className="admin-status-card">
              <span className="status-label">System Status</span>
              <h3>Operational</h3>
              <p>All core services are running normally.</p>
            </div>
          </div>
        </section>

        <section className="admin-stats-grid">
          <div className="admin-stat-card">
            <p>Total Users</p>
            <h2>1,248</h2>
            <span>Active student accounts</span>
          </div>

          <div className="admin-stat-card">
            <p>Total Resources</p>
            <h2>562</h2>
            <span>Books, PDFs, and materials</span>
          </div>

          <div className="admin-stat-card">
            <p>Departments</p>
            <h2>8</h2>
            <span>Academic categories available</span>
          </div>

          <div className="admin-stat-card">
            <p>Pending Requests</p>
            <h2>14</h2>
            <span>Items waiting for approval</span>
          </div>
        </section>

        <section className="admin-content-grid">
          <div className="admin-panel-card">
            <div className="admin-card-header">
              <h3>Quick Actions</h3>
              <span>Core management tools</span>
            </div>

            <div className="admin-action-list">
              <div className="admin-action-item">
                <div>
                  <h4>Add New Resource</h4>
                  <p>Upload books, PDFs, and new learning materials.</p>
                </div>
                <button onClick={() => navigate("/admin/add")}>Add</button>
              </div>

              <div className="admin-action-item">
                <div>
                  <h4>Manage Users</h4>
                  <p>View student accounts and maintain user records.</p>
                </div>
                <button onClick={() => navigate("/admin/users")}>Open</button>
              </div>

              <div className="admin-action-item">
                <div>
                  <h4>Review Resources</h4>
                  <p>Check and organize department-wise materials.</p>
                </div>
                <button onClick={() => navigate("/admin/resources")}>View</button>
              </div>
            </div>
          </div>

          <div className="admin-panel-card">
            <div className="admin-card-header">
              <h3>Recent Activity</h3>
              <span>Latest administrative updates</span>
            </div>

            <div className="admin-activity-list">
              <div className="admin-activity-item">
                <div className="activity-dot"></div>
                <div>
                  <h4>New engineering resource uploaded</h4>
                  <p>Digital Electronics Handbook added to library.</p>
                </div>
              </div>

              <div className="admin-activity-item">
                <div className="activity-dot"></div>
                <div>
                  <h4>User account approved</h4>
                  <p>A new student registration was verified successfully.</p>
                </div>
              </div>

              <div className="admin-activity-item">
                <div className="activity-dot"></div>
                <div>
                  <h4>Department catalog updated</h4>
                  <p>Science resources section was reorganized.</p>
                </div>
              </div>

              <div className="admin-activity-item">
                <div className="activity-dot"></div>
                <div>
                  <h4>System backup completed</h4>
                  <p>All library metadata was backed up securely.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminHome; 