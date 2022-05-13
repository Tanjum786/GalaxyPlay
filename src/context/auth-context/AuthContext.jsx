import axios from "axios";
import { createContext, useState, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthReducer } from "./AuthReducer";

const authcontext = createContext();
const useAuth = () => useContext(authcontext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userDetailes, setuserDetailes] = useState({
    token: localStorage.getItem("userEncodedToken") || "",
    user: JSON.parse(localStorage.getItem("users")) ||{},
  });
  const [authState, Authdispatch] = useReducer(AuthReducer, {
    email: "",
    password: "",
    lastname: "",
    firstName: "",
    isSubmit: false,
    confirmpassword: "",
  });
  const SignupPage = async (
    email,
    password,
    firstName,
    lastname,
    confirmpassword,
    checkUserdetailes,
    checkPassword
  ) => {
    if (checkUserdetailes()) {
      if (checkPassword()) {
        try {
          const response = await axios.post("/api/auth/signup", {
            email,
            password,
            firstName,
            lastname,
            confirmpassword,
          });
          navigate(-2);
          toast.success(
            `${firstName} Congratulations,your account has been created successfully`
          );
          localStorage.setItem("userEncodedToken", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.createdUser)
          );
          setuserDetailes({
            ...userDetailes,
            token: response.data.encodedToken,
            user: response.data.createdUser,
          });
        } catch (error) {
          toast.error(error.response.data.errors[0]);
        }
      }
    }
  };
  const loginPage = async (email, password) => {
    if (email !== "" && password !== "") {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });
        if (response.status === 200) {
          localStorage.setItem("userEncodedToken", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.foundUser)
          );
          setuserDetailes({
            ...userDetailes,
            token: response.data.encodedToken,
            user: response.data.foundUser,
          });
          navigate(location?.state?.from?.pathname || "/", { replace: true });
          toast.success(`Login successfully`)
        } else {
          toast.error("Something went wrong!")
        }
      } catch (error) {
        toast.error(error.response.data.errors[0])
      }
    }
  };
  return (
    <authcontext.Provider
      value={{
        SignupPage,
        authState,
        Authdispatch,
        loginPage,
        userDetailes,
        setuserDetailes
      }}
    >
      {children}
    </authcontext.Provider>
  );
};

export { AuthProvider, useAuth };
