import React from "react";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <div>Logout Page</div>;
};

export default Logout;
