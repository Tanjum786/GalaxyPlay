import React from "react";
import { Footer, Navbar, SideBar } from "../../Components";

export const PlaylistVideo = () => {
  return (
    <>
      <Navbar />
      <div className="dis_flex">
        <SideBar />
        <h1>this is PlaylistVideo page</h1>
      </div>
      <Footer/>
    </>
  );
};
