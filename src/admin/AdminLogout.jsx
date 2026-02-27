import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}

export default AdminLogout;