import React from "react";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("This is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return <>Login Page</>;
};

export default Login;
