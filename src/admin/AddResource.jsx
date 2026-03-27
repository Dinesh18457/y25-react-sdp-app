import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function AddResource() {
  const [formData, setFormData] = useState({
    title: "",
    department: "Engineering",
    author: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Resource added successfully! (Demo)");
    console.log(formData);
  };

  return (
    <div className="admin-page-wrapper">
      <AdminNavBar />

      <main className="admin-main">
        <section className="admin-page-header">
          <p className="admin-eyebrow">Resource Management</p>
          <h1>Add New Resource</h1>
          <p className="admin-page-text">
            Upload books, notes, PDFs, and study materials to the SmartLib
            platform for student access.
          </p>
        </section>

        <section className="admin-panel-card">
          <div className="admin-card-header">
            <h3>Resource Details</h3>
            <span>Enter the information below to upload a new resource</span>
          </div>

          <form onSubmit={handleSubmit} className="admin-form-grid">
            <div className="admin-form-group">
              <label>Resource Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter resource title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label>Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option>Engineering</option>
                <option>Medical</option>
                <option>Law</option>
                <option>Commerce</option>
                <option>Science</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label>Author / Publisher</label>
              <input
                type="text"
                name="author"
                placeholder="Enter author or publisher name"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-group">
              <label>Upload File</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Description</label>
              <textarea
                name="description"
                rows="5"
                placeholder="Enter resource description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="admin-form-full">
              <button type="submit" className="admin-primary-btn">
                Add Resource
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddResource;