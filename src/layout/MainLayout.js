import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />

      <h1>footer</h1>
    </div>
  );
}

export default MainLayout;
