import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <h1>Explore </h1>
        </NavLink>
        <NavLink to='/login'>
          <h1>Login</h1>
        </NavLink>
        <NavLink to='/signup'>
          <h1>Signup</h1>
        </NavLink>
      </nav>
    </div>
  );
};
