import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/style.css";
import "./user.css";

function UserNavBar() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const userName = loggedInUser.name || "User";
  const userDept = loggedInUser.department || "Department";
  const userEmail = loggedInUser.email || "user@example.com";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className="navbar smartlib-user-navbar">
      <div className="logo">SmartLib</div>

      <div className="smartlib-user-nav-right">
        <div className="smartlib-user-nav-links">
          <Link to="/user">Home</Link>
          <Link to="/user/resources">Resources</Link>
          <Link to="/user/borrowings">My Books</Link>
        </div>

        <div className="smartlib-user-menu" ref={menuRef}>
          <button
            className="smartlib-user-menu-trigger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="smartlib-user-menu-avatar">{userInitial}</div>

            <div className="smartlib-user-menu-text">
              <span className="smartlib-user-menu-name">{userName}</span>
              <span className="smartlib-user-menu-dept">{userDept}</span>
            </div>

            <span className="smartlib-user-menu-caret">
              {menuOpen ? "▴" : "▾"}
            </span>
          </button>

          {menuOpen && (
            <div className="smartlib-user-dropdown">
              <div className="smartlib-user-dropdown-header">
                <div className="smartlib-user-dropdown-avatar">{userInitial}</div>
                <div>
                  <h4>{userName}</h4>
                  <p>{userEmail}</p>
                </div>
              </div>

              <div className="smartlib-user-dropdown-info">
                <span>Department</span>
                <strong>{userDept}</strong>
              </div>

              <button
                className="smartlib-user-dropdown-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default UserNavBar;