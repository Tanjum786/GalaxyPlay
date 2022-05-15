import React from "react";
import "./likevideo.css";
import { SideBar } from "../../Components";
import { LikeCard } from "../../Components/LikeCard/LikeCard";
import { useAuth } from "../../context/auth-context/AuthContext";
import { useLikeVideoContext } from "../../context/Liked-context/Likevideocontext";
import { getlikevideo } from "../../ApiCalls";

export const LikeVideo = () => {
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { likeVideoState, dispatchLikeVideo } = useLikeVideoContext();
  const { likes } = likeVideoState;

  getlikevideo(token, dispatchLikeVideo);

  return (
    <main className="dis_flex">
      <SideBar />

      <section className="video-section dis_flex">
        <div className="page-container">
          <h1 className="page-heading">Liked Videos - {likes.length}</h1>
        </div>
        <div className="video-container dis_flex">
          {likes.length !== 0 ? (
            likes.map((item)=>{
           return <LikeCard key={item._id} {...item} />
            })
          ) : (
            <h1 className="page-subHeading">No liked videos yet </h1>
          )}
        </div>
      </section>
    </main>
  );
};
