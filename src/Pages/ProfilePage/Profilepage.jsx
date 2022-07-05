import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../Components";
import { useAuth } from "../../context";
import "./profile.css";

export const Profilepage = () => {
  const navigate=useNavigate()
  const {
    userDetailes,
    setuserDetailes,
    Authdispatch,
  } = useAuth();
  const { token, user } = userDetailes;
  
  const logoutHandler = () => {
    localStorage.removeItem("userEncodedToken");
    localStorage.removeItem("users");
    setuserDetailes({ token: "", user: {} });
    Authdispatch({ type: "LOGOUT" });
    navigate("/");
    toast.success("Logout successfully");
  };
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-detial">
          <h1 className="title-profile">Profile</h1>
          <h1 className="title-profile-heading">Profile Detials</h1>
          <p className="userdetail">
            <strong>Name:</strong> {user.firstName} {user.lastName}{" "}
          </p>
          <p className="userdetail">
            <strong>Email:</strong> {user.email}{" "}
          </p>
          <h1 className="title-profile-heading">Account Setting</h1>

          <button
            className="login_btn profile-logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
