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
  PlaylistModalprovider,
  PlaylistProvider,
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
            <PlaylistModalprovider>
              <PlaylistProvider>
                <CatergoryProvider>
                  <AuthProvider>
                    <ShowpasswordProvider>
                      <App />
                    </ShowpasswordProvider>
                  </AuthProvider>
                </CatergoryProvider>
              </PlaylistProvider>
            </PlaylistModalprovider>
          </HistorycontextProvider>
        </Watchlatercontextprovider>
      </LikevideocontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
