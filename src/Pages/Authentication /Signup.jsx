import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Authentication.css";
import { usePassword } from "../../context/showpassword-context/ShowpasswordContext";
import { useAuth } from "../../context/auth-context/AuthContext";
import { Footer, Navbar } from "../../Components";
import toast from "react-hot-toast";

export const Signup = () => {
  const { showpassword, ShowpasswordFun } = usePassword();

  const { SignupPage, authState, Authdispatch } = useAuth();
  const { email, password, lastname, firstName, isSubmit, confirmpassword } =
    authState;
  const singuphandler = (e) => {
    e.preventDefault();
    Authdispatch({ type: "SUBMIT"});
  };

  const checkUserdetailes = () => {
    return (
      email !== "" &&
      password !== "" &&
      lastname !== "" &&
      firstName !== "" &&
      confirmpassword !== "" &&
      password !== ""
    );
  };
  const checkPassword = () => {
    if (password === confirmpassword) {
      return true;
    } else {
      toast.error("password entered is not matched");
      return false;
    }
  };

  useEffect(() => {
    SignupPage(
      email,
      password,
      firstName,
      lastname,
      confirmpassword,
      checkPassword,
      checkUserdetailes
    );
  }, [isSubmit]);

  return (
    <>
    <Navbar/>
      <div className="main-explore e_container">
        <section className="e_login_signup_container dis_flex">
          <form>
            <div className="login_signup_container signup_container gap_s dis_flex">
              <h1 className="login_signup_name">Sign Up</h1>
              <label htmlFor="firstName">
                First Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="firstName"
                className="input_filed padding_small"
                placeholder="Enter you first name"
                id="firstName"
                value={firstName}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAIL",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="lastname">
                Last Name<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="lastname"
                className="input_filed padding_small"
                placeholder="Enter your Last name"
                value={lastname}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAIL",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="Email">
                Email<small className="star_color font_small">*</small>
              </label>
              <input
                type="email"
                name="email"
                className="input_filed padding_small"
                placeholder="demo@demo.com"
                value={email}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAIL",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                require
              />
              <label htmlFor="password_singup">
                Password<small className="star_color font_small">*</small>
              </label>
              <input
                type="text"
                name="password"
                className="input_filed padding_small"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  Authdispatch({
                    type: "USER_DETAIL",
                    payload: e.target.value,
                    name: e.target.name,
                  })
                }
                required
              />
              <label htmlFor="Confirm_pass">
                Confirm password
                <small className="star_color font_small">*</small>
              </label>
              <div className="showpassword_container">
                <input
                  type={showpassword}
                  name="confirmpassword"
                  className="input_filed padding_small password_filed"
                  placeholder="Enter your Password again"
                  value={confirmpassword}
                  onChange={(e) =>
                    Authdispatch({
                      type: "USER_DETAIL",
                      payload: e.target.value,
                      name: e.target.name,
                    })
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
              <div className="checkbox_section">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="input_filed padding_small"
                  id="terms"
                />
      
                <label htmlFor="terms"> I accept all Terms & Conditions</label>
              </div>
              <button
                type="submit"
                className="login_btn  btn_style"
                onClick={(e) => singuphandler(e)}
              >
                Register
              </button>
              <p className="new_account_link font_small">
                Already have account?
                <Link to="/login" className="alert_primary">
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
      <Footer/>
    </>
  );
};
