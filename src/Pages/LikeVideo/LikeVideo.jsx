import React from "react";
import "./likevideo.css";
import { Footer, LikeCard, Navbar, SideBar } from "../../Components";
import { getlikevideo } from "../../ApiCalls";
import { useAuth, useLikeVideoContext } from "../../context";

export const LikeVideo = () => {
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { likeVideoState, dispatchLikeVideo } = useLikeVideoContext();
  const { likes } = likeVideoState;

  getlikevideo(token, dispatchLikeVideo);

  return (
    <>
      <Navbar />
      <main className="main-explore dis_flex">
        <SideBar />

        <section className="video-section dis_flex">
          <div className="page-container">
            <h1 className="page-heading">Liked Videos - {likes.length}</h1>
          </div>
          <div className="video-container dis_flex">
            {likes.length !== 0 ? (
              likes.map((item) => {
                return <LikeCard key={item._id} {...item} />;
              })
            ) : (
              <h1 className="page-subHeading">No liked videos yet </h1>
            )}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
