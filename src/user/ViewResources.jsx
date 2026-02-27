import React, { useState } from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function ViewResources() {

  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const departments = {
    Engineering: ["CSE", "MECH", "ECE", "EEE", "Civil"],
    Medical: ["MBBS", "BDS", "Pharmacy"],
    Law: ["Criminal Law", "Corporate Law"],
    Commerce: ["B.Com", "M.Com"],
    Science: ["Physics", "Chemistry", "Biology"]
  };

  const books = {
  CSE: [
    {
      id: 1,
      title: "React Basics",
      author: "Dan Abramov",
      file: "/pdfs/react-basics.pdf"
    },
    {
      id: 2,
      title: "Data Structures",
      author: "Mark Allen",
      file: "/pdfs/data-structures.pdf"
    }
  ],

  MECH: [
    {
      id: 3,
      title: "Thermodynamics",
      author: "Yunus Cengel",
      file: "/pdfs/thermodynamics.pdf"
    }
  ]
};

  return (
    <div>
      <UserNavBar />

      <div className="user-content">

        <h2>Departments</h2>

        {!selectedDept && (
          <div className="card-container">
            {Object.keys(departments).map((dept) => (
              <div
                key={dept}
                className="card"
                onClick={() => {
                  setSelectedDept(dept);
                  setSelectedCourse(null);
                }}
              >
                {dept}
              </div>
            ))}
          </div>
        )}

        {selectedDept && !selectedCourse && (
          <>
            <h2>{selectedDept} Courses</h2>
            <div className="card-container">
              {departments[selectedDept].map((course) => (
                <div
                  key={course}
                  className="card"
                  onClick={() => setSelectedCourse(course)}
                >
                  {course}
                </div>
              ))}
            </div>
          </>
        )}

        {selectedCourse && (
          <>
            <h2>{selectedCourse} Books</h2>
            <div className="card-container">
              {(books[selectedCourse] || []).map((book) => (
                <div
                key={book.id}
                className="card"
                onClick={() => {
  window.open(book.file, "_blank");

  let stored = JSON.parse(localStorage.getItem("openedBooks")) || [];

  const alreadyExists = stored.find(b => b.title === book.title);

  if (!alreadyExists) {
    stored.push(book);
    localStorage.setItem("openedBooks", JSON.stringify(stored));
  }
}}
                >
                <p>{book.title}</p>
                <p>{book.author}</p>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default ViewResources;