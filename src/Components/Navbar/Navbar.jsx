import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { HamburgerMenu } from "../Hamburger/HamburgerMenu";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/auth-context/AuthContext";
import { useCategory } from "../../context";
import toast from "react-hot-toast";

export const Navbar = ({searchQuery, setsearch}) => {
  const [open, setopen] = useState(false);
  const {dispatchCategory}=useCategory()
  const {
    userDetailes,
    setuserDetailes,
    authState: { isSubmit },
    Authdispatch,
  } = useAuth();
  const { token, user } = userDetailes;
  const navigate = useNavigate();
  const location = useLocation();
  const hamburgIcon = (
    <HiMenu
      className="hamburg-container"
      size="50px"
      onClick={() => setopen(!open)}
    />
  );
  const logoutHandler = () => {
    localStorage.removeItem("userEncodedToken");
    localStorage.removeItem("users");
    setuserDetailes({ token: "", user: {} });
    Authdispatch({ type: "LOGOUT" });
    navigate("/");
    toast.success("Logout successfully");
  };
  const closeIcon = (
    <IoMdCloseCircle
      className="hamburg-container"
      size="50px"
      onClick={() => setopen(!open)}
    />
  );

  const searchInput=((e)=>{
    dispatchCategory({type:"CLEAR_CATEGORY"})
    setsearch(e.target.value)

  })
  return (
      <nav className="nav-bar">
        <div className="header-container dis_flex">
          <div className="hamburg-title-container dis_flex">
            {location.pathname === "/login" || location.pathname === "/signup"
              ? null
              : open
              ? closeIcon
              : hamburgIcon}
            {open && <HamburgerMenu />}
            <NavLink to="/">
              <div className="dis_flex title-containe">
                <h1 className="app-titel">
                  Galaxy<span className="span-color">Play</span>
                </h1>
                <i className="fa-solid fa-play play-icon"></i>
              </div>
            </NavLink>
          </div>
          {location.pathname === "/login" ||
          location.pathname === "/signup" ? null : (
            <div className="search">
              <input
                type="text"
                placeholder=" Search Your Favorite one"
                name="search"
                value={searchQuery}
                onChange={searchInput}
              />
              <i className="fa fa-search search-icon"></i>
            </div>
          )}
          <div className="hamburg-title-container dis_flex">
            <NavLink to="/">
              <h1 className="app-titel explore">Explore</h1>
            </NavLink>
            {token && user ? (
              <>
                <div className="profile-conatiner dis_flex">
                  <FaUserCircle  className="user-icon" />
                  <span className="user-name"> {user.firstName}</span>
                </div>
                <div>
                  <button className="login_btn" onClick={logoutHandler}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink to="/login">
                <button className="login_btn">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
  );
};
