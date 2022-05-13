import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Authentication.css";
import { toast } from "react-toastify";
import { usePassword } from "../../context/showpassword-context/ShowpasswordContext";
import { useAuth } from "../../context/auth-context/AuthContext";

export const Login = () => {
  const { showpassword, ShowpasswordFun } = usePassword();
  const { authState, Authdispatch, loginPage } = useAuth();
  const { email, password, isSubmit } = authState;
  
  const submitHandler = (e) => {
    e.preventDefault();
    Authdispatch({ type: "LOGINSUBMIT" });
  };
  const guestLoginHandler = (e) => {
    e.preventDefault()
    Authdispatch({
      type: "GUEST-LOGIN",
      payload: { email: "guest@gmail.com", password: "guest1234" },
    });
  };
  
    useEffect(() => {
      if (isSubmit) {
        loginPage(email, password);
      }
    }, [isSubmit]);
  return (
    <>
      <div className="e_container">
        <section className="e_login_signup_container dis_flex">
          <form onSubmit={submitHandler}>
            <div className="login_signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Login</h1>
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                name="email"
                id="userEmail"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                value={email}
                onChange={(e) =>
                  Authdispatch({ type: "EMAIL", payload: e.target.value })
                }
                required
              />
              <label htmlFor="useonClick={showiconfun}rPassword">
                Password*
              </label>
              <div className="showpassword_container">
                <input
                  type={showpassword}
                  name="password"
                  id="userPassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) =>
                    Authdispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                />
                {showpassword === "password" ? (
                  <i
                    className="fa-solid fa-eye-slash eye_slash"
                    onClick={ShowpasswordFun}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-eye eye_slash"
                    onClick={ShowpasswordFun}
                  ></i>
                )}
              </div>
              <Link to="" className="forget_password">
                <span>Forgot password ?</span>
              </Link>
              <button
                className="login_btn btn_style guestLogin-btn"
                onClick={guestLoginHandler}
              >
                Guest Login
              </button>
              <button type="submit" className="login_btn btn_style">
                Login
              </button>
              <p className="new_account_link font_small">
                Not a user yet ?
                <Link to="/signup" className="alert_primary">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
