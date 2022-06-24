import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>header</h1>
      <Outlet />

      <h1>footer</h1>
    </div>
  );
}

export default MainLayout;
