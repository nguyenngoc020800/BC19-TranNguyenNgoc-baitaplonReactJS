import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const MainLayOut = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .auth-content {
    width: 400px;
    margin: auto;
    border: solid 1px #333;
    border-radius: 20px;
    padding: 30px;
  }
`;
const AuthenLayout = () => {
  return (
    <MainLayOut>
      <div className="auth-content">
        <Outlet />
      </div>
    </MainLayOut>
  );
};
export default AuthenLayout;
