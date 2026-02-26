import React from "react";
import AdminNavBar from "./AdminNavBar";
import "./admin.css";

function ViewResources() {
  const books = [
    { id: 1, title: "React Basics", author: "Dan Abramov" },
    { id: 2, title: "Java Programming", author: "James Gosling" }
  ];

  return (
    <div>
      <AdminNavBar />

      <div className="admin-content">
        <h2>All Resources</h2>

        {books.map((book) => (
          <div key={book.id} className="card">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewResources;