import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth-page/auth-page";
import { HomePage } from "./pages/home-page/home-page";
import { UsersPage } from "./pages/users-page/users-page";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};