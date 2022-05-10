import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ShowpasswordProvider } from "./Hooks/context/showpassword-context/ShowpasswordContext";
import { AuthProvider } from "./Hooks/context/auth-context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ShowpasswordProvider>
          <App />
        </ShowpasswordProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
