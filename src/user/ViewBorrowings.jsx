import React from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function ViewBorrowings() {
  const borrowed = [
    { id: 1, title: "React Basics" }
  ];

  return (
    <div>
      <UserNavBar />

      <div className="user-content">
        <h2>My Borrowings</h2>

        {borrowed.map((book) => (
          <div key={book.id} className="card">
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBorrowings;