import React from "react";
import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import Registration from "./pages/Registration";

/* Admin Pages */
import AdminHome from "./admin/AdminHome";
import AddResource from "./admin/AddResource";
import ViewUsers from "./admin/ViewUsers";
import ViewResources from "./admin/ViewResources";
import ResourceDetails from "./admin/ResourceDetails";

/* User Pages */
import UserHome from "./user/UserHome";
import UserViewResources from "./user/ViewResources";
import MyBooks from "./user/MyBooks";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/register" element={<Registration />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/add" element={<AddResource />} />
      <Route path="/admin/resources" element={<ViewResources />} />
      <Route path="/admin/resources/:id" element={<ResourceDetails />} />
      <Route path="/admin/users" element={<ViewUsers />} />

      {/* User Routes */}
      <Route path="/user" element={<UserHome />} />
      <Route path="/user/resources" element={<UserViewResources />} />
      <Route path="/user/borrowings" element={<MyBooks />} />
    </Routes>
  );
}

export default App;