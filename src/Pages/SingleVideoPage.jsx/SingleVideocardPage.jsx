import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleplaylist } from "../../ApiCalls";
import { Footer, Navbar, Playlistvideocard, SideBar } from "../../Components";
import { useAuth } from "../../context";

export const SingleVideocardPage = () => {
  const [playlistVideo, setPlaylistvideo] = useState(null);
  const{playlistId}=useParams()
  const{userDetailes}=useAuth()
  const {token}=userDetailes

  useEffect(()=>getSingleplaylist(token,setPlaylistvideo,playlistId),[])
  return (
    <>
      <Navbar />
      <main className="main-explore dis_flex" key={playlistId}>
        <SideBar />

        <section className="video-section dis_flex">
          <div className="page-container">
            {playlistVideo ? (
              <h1 className="page-heading">
                {playlistVideo.title} - {playlistVideo.videos.length} videos
              </h1>
            ) : null}
          </div>
          {playlistVideo ? (
            playlistVideo.videos.map((item) => {
              return (
                <>
                  <div className="video-container dis_flex">
                    <Playlistvideocard
                    key={playlistId}
                      {...item}
                      setPlaylistvideo={setPlaylistvideo}
                      playlistId={playlistId}
                    />
                  </div>
                </> 
              );
            })
          ) : (
            <h1 className="page-subHeading">Empty playlist</h1>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
