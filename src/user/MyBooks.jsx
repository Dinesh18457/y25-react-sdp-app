import React, { useEffect, useState } from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function MyBooks() {
  const [openedBooks, setOpenedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("openedBooks")) || [];
    setOpenedBooks(storedBooks);
  }, []);

  const openBook = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div>
      <UserNavBar />

      <div className="user-content">
        <h2>📚 My Opened Books</h2>

        {openedBooks.length === 0 ? (
          <p>No books opened yet.</p>
        ) : (
          <div className="card-container">
            {openedBooks.map((book, index) => (
              <div
                key={index}
                className="card"
                onClick={() => openBook(book.file)}
              >
                <p>{book.title}</p>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooks;