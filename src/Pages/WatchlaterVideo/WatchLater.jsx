import React from "react";
import { SideBar, WatchlaterCard } from "../../Components";
import {usewatchlater } from "../../context";

export const WatchLater = () => {
    const {watchlaterState}=usewatchlater();
    const {watchLater}=watchlaterState;


  return (
    <main className="dis_flex">
      <SideBar />

      <section className="video-section dis_flex">
        <div className="page-container">
          <h1 className="page-heading">WatchLater Videos - {watchLater.length}</h1>
        </div>
        <div className="video-container dis_flex">
          {watchLater.length!==0?
          watchLater.map((item)=>{
            return <WatchlaterCard key={item._id} {...item}/>
          })
          : (
            <h1 className="page-subHeading">No videos yet </h1>
          )}
        </div>
      </section>
    </main>
  );
};
