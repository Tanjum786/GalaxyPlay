import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context/AuthContext";

export const SideBar = () => {
  const { userDetailes } = useAuth();
  const { token, user } = userDetailes;
  return (
    <>
      <aside className="side-menu">
        <ul className="sidebar-container">
          <li className="sidebar-list">
            <NavLink to="/" className={({isActive})=>(isActive?"active-menu":"notactive-menu")}>
              <i className="icon-sidebar fa-solid fa-compass"> </i>
              <p className="title-sidebar">Explore</p>
            </NavLink>
          </li>
          <li className="sidebar-list">
            <NavLink to="/likevideo" className={({isActive})=>(isActive?"active-menu" :"notactive-menu")}>
              <i className="icon-sidebar fa-solid fa-thumbs-up "></i>{" "}
              <p className="title-sidebar">Liked</p>
            </NavLink>
          </li>
          <li className="sidebar-list">
            <NavLink to="/playlist" className={({isActive})=>(isActive?"active-menu":"notactive-menu")}>
              <i className="icon-sidebar fa-solid fa-folder-plus"></i>
              <p className="title-sidebar">Playlist</p>
            </NavLink>
          </li>
          <li className="sidebar-list">
            <NavLink to="/wacthlater" className={({isActive})=>(isActive?"active-menu":"notactive-menu")}>
              <i className="icon-sidebar fa-solid fa-clock"></i>
              <p className="title-sidebar">WatchLater</p>
            </NavLink>
          </li>
          <li className="sidebar-list">
            <NavLink to="/history" className={({isActive})=>isActive?"active-menu":"notactive-menu"}>
              <i className="icon-sidebar fa-solid fa-clock-rotate-left"></i>
              <p className="title-sidebar">History</p>
            </NavLink>
          </li>
          {token && user ? (
            <li className="sidebar-list">
              <i className="icon-sidebar fa-solid fa-circle-user"></i>

              <p className="title-sidebar">{user.firstName}</p>
            </li>
          ) : (
            <li className="sidebar-list">
              <i className="icon-sidebar fa-solid fa-circle-user"></i>

              <p className="title-sidebar">Profile</p>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
};

