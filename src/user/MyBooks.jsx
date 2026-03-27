import React from "react";
import UserNavBar from "./UserNavBar";
import "../pages/style.css";
import "./user.css";

function MyBooks() {
  const borrowedBooks = [
    {
      id: 1,
      title: "Digital Electronics Handbook",
      department: "Engineering",
      status: "Issued",
    },
    {
      id: 2,
      title: "Human Anatomy Notes",
      department: "Medical",
      status: "Issued",
    },
  ];

  return (
    <div className="page-container smartlib-auth-page">
      <UserNavBar />

      <main className="smartlib-user-shell">
        <section className="smartlib-user-hero">
          <div className="smartlib-user-hero-left">
            <p className="smartlib-user-eyebrow">My Library</p>
            <h1>My Books</h1>
            <p className="smartlib-user-hero-text">
              View all books and materials currently issued to your account.
            </p>
          </div>
        </section>

        <section className="user-books-card">
          <div className="user-books-header">
            <h3>Issued Books</h3>
            <span>Books linked to your account</span>
          </div>

          <div className="user-books-table-wrapper">
            <table className="user-books-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Book Title</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowedBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.department}</td>
                    <td>
                      <span className="user-book-badge">{book.status}</span>
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

export default MyBooks;