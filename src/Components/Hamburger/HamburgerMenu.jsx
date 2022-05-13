import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context/AuthContext";
import "./hamburger.css";
export const HamburgerMenu = () => {
  const {userDetailes}=useAuth();
  const {token,user}=userDetailes;
  return (
    <>
      <aside>
        <ul className="hamburger-sidebar-container">
          <li className="hamburger-sidebar-list">
            <NavLink to="/" className={({isActive})=>(isActive?"activeLink":"notactive")}>
              <i className="icon-hamburger-sidebar fa-solid fa-compass"> </i>
              <span className="title-hamburger-sidebar">Explore</span>
            </NavLink>
          </li>
          <li className="hamburger-sidebar-list">
            <NavLink to="/likevideo" className={({isActive})=>(isActive?"activeLink":"notactive")}>
              <i className="icon-hamburger-sidebar fa-solid fa-thumbs-up "></i>
              <span className="title-hamburger-sidebar">Liked</span>
            </NavLink>
          </li>
          <li className="hamburger-sidebar-list">
            <NavLink to="/playlist" className={({isActive})=>(isActive?"activeLink":"notactive")}>
              <i className="icon-hamburger-sidebar fa-solid fa-folder-plus"></i>
              <span className="title-hamburger-sidebar">playlist</span>
            </NavLink>
          </li>
          <li className="hamburger-sidebar-list">
            <NavLink to="/wacthlater" className={({isActive})=>(isActive?"activeLink":"notactive")} >
              <i className="icon-hamburger-sidebar fa-solid fa-clock"></i>
              <span className="title-hamburger-sidebar">WatchLater</span>
            </NavLink>
          </li>
          <li className="hamburger-sidebar-list">
            <NavLink to="/history" className={({isActive})=>(isActive?"activeLink":"notactive")} >
              <i className="icon-hamburger-sidebar fa-solid fa-clock-rotate-left"></i>
              <span className="title-hamburger-sidebar">History</span>
            </NavLink>
          </li>
          {token && user ? (
            
            <li className="hamburger-sidebar-list">
              <i className="icon-hamburger-sidebar fa-solid fa-circle-user"></i>
              <span className="title-hamburger-sidebar">{user.firstName}</span>
            </li>
          ) : (
            <li className="hamburger-sidebar-list">
              <i className="icon-hamburger-sidebar fa-solid fa-circle-user"></i>
              <span className="title-hamburger-sidebar">Profile</span>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
};
