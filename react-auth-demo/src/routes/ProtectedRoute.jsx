import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const ProtectedRoute = () => {
  const { token } = useAuth();

  console.log(`protectedRoute`, token);
  // 사용자가 인증되었는지 확인
  if (!token) {
    // 인증되지 않은 경우 로그인 페이지로 리디렉션됩니다.
    return <Navigate to="/login" />;
  }

  // 인증된 경우 하위 경로를 렌더링합니다.
  return <Outlet />;
};

export default ProtectedRoute;

