import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth-page/auth-page";
import { UsersPage } from "./pages/users-page/users-page";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};