import React from "react";
import "./auth-page.css";
import { AuthForm } from "./auth-form/auth-form";

export const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
      <AuthForm/>
    </div>
  );
};
