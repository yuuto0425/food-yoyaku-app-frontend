import React from "react";
import { Outlet } from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <div className="Auth">
      <div className="AuthContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
