import React from "react";
import { Routes, Route } from "react-router-dom";
import { Explore, HistoryVideo, LikeVideo, Login, PlaylistVideo, Signup, WatchLater } from "../Pages";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/history" element={<HistoryVideo />} />
      <Route path="/likevideo" element={<LikeVideo/>}/>
      <Route path="/playlist" element={<PlaylistVideo/>}/>
      <Route path="/" element={<Explore/>}/>
      <Route path="/wacthlater" element={<WatchLater/>}/>

    </Routes>
  );
};
