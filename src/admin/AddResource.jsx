import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function AddResource() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!book.title || !book.author || !book.category) {
      alert("Please fill all fields");
      return;
    }

    alert("Resource Added Successfully!");
    setBook({ title: "", author: "", category: "" });
  };

  return (
    <div>
      <AdminNavBar />

      <div className="admin-content">
        <h2>Add New Resource</h2>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add Resource</button>
      </div>
    </div>
  );
}

export default AddResource;