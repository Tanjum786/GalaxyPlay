import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CatergoryProvider,
  HistorycontextProvider,
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
          <HistorycontextProvider>
            <CatergoryProvider>
              <AuthProvider>
                <ShowpasswordProvider>
                  <App />
                </ShowpasswordProvider>
              </AuthProvider>
            </CatergoryProvider>
          </HistorycontextProvider>
        </Watchlatercontextprovider>
      </LikevideocontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
