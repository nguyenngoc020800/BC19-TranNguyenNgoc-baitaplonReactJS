import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log("nguoi dung", user);
  const logOut = () => {
    dispatch({ type: "auth/logOut" });
  };
  if (user) {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__logo">
          <a href="#">WebPhim</a>
        </div>
        <div className="nav-bar__list">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Phim</a>
            </li>
          </ul>
        </div>
        <div className="nav-bar__user">
          <ul>
            <li>
              <a href="#">
                <i className="fa-solid fa-globe" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-moon" />
              </a>
            </li>
            <li>
              <p>{user.taiKhoan}</p>
            </li>
            <li>
              <button
                className="btn btn-success"
                onClick={() => {
                  logOut();
                }}
              >
                Log out
              </button>{" "}
            </li>
          </ul>
        </div>
        <div className="nav-bar__mobile">
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
          >
            <i className="fa-solid fa-caret-down" />
          </button>
        </div>
      </nav>
    );
  }
  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">
        <a href="#">WebPhim</a>
      </div>
      <div className="nav-bar__list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Phim</a>
          </li>
        </ul>
      </div>
      <div className="nav-bar__user">
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-globe" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-moon" />
            </a>
          </li>
          <li>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(`/login`);
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="btn btn-success"
              onClick={() => {
                navigate(`/register`);
              }}
            >
              Register
            </button>{" "}
          </li>
        </ul>
      </div>
      <div className="nav-bar__mobile">
        <button className="navbar-toggle" type="button" data-toggle="collapse">
          <i className="fa-solid fa-caret-down" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
