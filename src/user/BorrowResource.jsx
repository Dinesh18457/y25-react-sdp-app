import React from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function BorrowResource() {
  const books = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Java Programming" }
  ];

  const handleBorrow = (title) => {
    alert(`You borrowed ${title}`);
  };

  return (
    <div>
      <UserNavBar />

      <div className="user-content">
        <h2>Borrow Resource</h2>

        {books.map((book) => (
          <div key={book.id} className="card">
            <p>{book.title}</p>
            <button onClick={() => handleBorrow(book.title)}>
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BorrowResource;