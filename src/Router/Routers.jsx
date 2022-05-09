import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Explore,
  HistoryVideo,
  LikeVideo,
  Login,
  PlaylistVideo,
  Signup,
  WatchLater,
} from "../Pages";
import MockmanEs from "mockman-js";
import { RequireAuth } from "./Components/RequireAuth";

export const Routers = () => {
  return (
    <Routes>
    <Route path="/mock" element={<MockmanEs />} />
    <Route path="/" element={<Explore />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route
      path="/wacthlater"
      element={
        <RequireAuth>
          <WatchLater />
        </RequireAuth>
      }
    />
    <Route
      path="/playlist"
      element={
        <RequireAuth>
          <PlaylistVideo />
        </RequireAuth>
      }
    />
    <Route
      path="/history"
      element={
        <RequireAuth>
          <HistoryVideo />
        </RequireAuth>
      }
    />
    <Route
      path="/likevideo"
      element={
        <RequireAuth>
          <LikeVideo />
        </RequireAuth>
      }
    />
  </Routes>
  );
};
