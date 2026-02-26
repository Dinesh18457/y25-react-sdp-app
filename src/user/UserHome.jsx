import React from "react";
import UserNavBar from "./UserNavBar";
import "./user.css";

function UserHome() {
  return (
    <div>
      <UserNavBar />

      <div className="user-content">
        <h2>Welcome User</h2>
        <p>Browse and borrow books here.</p>
      </div>
    </div>
  );
}

export default UserHome;