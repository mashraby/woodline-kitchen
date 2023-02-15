import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthPage } from "./pages/auth-page/auth-page";
import { RolesPage } from "./pages/roles-page/roles-page";
import { UsersPage } from "./pages/users-page/users-page";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/roles" element={<RolesPage />} />
      </Routes>
    </div>
  );
};