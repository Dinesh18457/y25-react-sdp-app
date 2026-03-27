import React from "react";
import UserNavBar from "./UserNavBar";
import "../pages/style.css";
import "./user.css";

function ViewResources() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  const department = loggedInUser.department || "Engineering";

  const resources = [
    // Engineering
    {
      id: 1,
      title: "React Basics",
      author: "Dan Abramov",
      dept: "Engineering",
      file: "/pdfs/react-basics.pdf",
    },
    {
      id: 2,
      title: "Data Structures",
      author: "Mark Allen",
      dept: "Engineering",
      file: "/pdfs/data-structures.pdf",
    },
    {
      id: 3,
      title: "Operating Systems",
      author: "Silberschatz",
      dept: "Engineering",
      file: "/pdfs/os.pdf",
    },
    {
      id: 4,
      title: "Database Management Systems",
      author: "Korth",
      dept: "Engineering",
      file: "/pdfs/dbms.pdf",
    },

    // Medical
    {
      id: 5,
      title: "Human Anatomy",
      author: "Dr. A. Sharma",
      dept: "Medical",
      file: "/pdfs/anatomy.pdf",
    },
    {
      id: 6,
      title: "Physiology Basics",
      author: "Dr. Meera",
      dept: "Medical",
      file: "/pdfs/physiology.pdf",
    },

    // Law
    {
      id: 7,
      title: "Constitutional Law",
      author: "M. P. Jain",
      dept: "Law",
      file: "/pdfs/constitutional-law.pdf",
    },
    {
      id: 8,
      title: "Business Law",
      author: "A. Kumar",
      dept: "Law",
      file: "/pdfs/business-law.pdf",
    },

    // Commerce
    {
      id: 9,
      title: "Financial Accounting",
      author: "S. P. Gupta",
      dept: "Commerce",
      file: "/pdfs/accounting.pdf",
    },
    {
      id: 10,
      title: "Business Economics",
      author: "R. Agarwal",
      dept: "Commerce",
      file: "/pdfs/economics.pdf",
    },

    // Science
    {
      id: 11,
      title: "Physics Fundamentals",
      author: "H. C. Verma",
      dept: "Science",
      file: "/pdfs/physics.pdf",
    },
    {
      id: 12,
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      dept: "Science",
      file: "/pdfs/chemistry.pdf",
    },
  ];

  const filteredBooks = resources.filter(
    (book) => book.dept === department
  );

  const openBook = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div className="page-container">
      <UserNavBar />

      <div className="simple-resources-container">
        <h2 className="dept-title">Departments</h2>
        <h3 className="dept-subtitle">{department} Books</h3>

        <div className="simple-resource-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                className="simple-resource-card"
                key={book.id}
                onClick={() => openBook(book.file)}
              >
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "white" }}>No books available for this department.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewResources;