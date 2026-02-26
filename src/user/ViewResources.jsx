import React from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function ViewResources() {
  const books = [
    { id: 1, title: "React Basics", author: "Dan Abramov" },
    { id: 2, title: "Java Programming", author: "James Gosling" }
  ];

  return (
    <div>
      <UserNavBar />

      <div className="user-content">
        <h2>Available Resources</h2>

        {books.map((book) => (
          <div key={book.id} className="card">
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewResources;