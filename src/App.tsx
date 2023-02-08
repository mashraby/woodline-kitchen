import React from "react";
import { Route, Routes } from "react-router-dom";
import RecipeReviewCard from "./components/card/card";
import SideBar from "./components/sidebar/sidebar";
import { AuthPage } from "./pages/auth-page/auth-page";
import { HomePage } from "./pages/home-page/home-page";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<SideBar />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/card" element={<RecipeReviewCard />}/>  
      </Routes>
    </div>
  );
};