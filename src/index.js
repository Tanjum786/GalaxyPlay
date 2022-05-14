import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider} from "./context/auth-context/AuthContext";
import { ShowpasswordProvider } from "./context/showpassword-context/ShowpasswordContext";
import { LikevideocontextProvider } from "./context/Liked-context/Likevideocontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LikevideocontextProvider>
      <AuthProvider>
        <ShowpasswordProvider>
          <App />
        </ShowpasswordProvider>
      </AuthProvider>
      </LikevideocontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
