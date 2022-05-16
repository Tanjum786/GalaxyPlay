import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  LikevideocontextProvider,
  ShowpasswordProvider,
  Watchlatercontextprovider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LikevideocontextProvider>
        <Watchlatercontextprovider>
          <AuthProvider>
            <ShowpasswordProvider>
              <App />
            </ShowpasswordProvider>
          </AuthProvider>
        </Watchlatercontextprovider>
      </LikevideocontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
