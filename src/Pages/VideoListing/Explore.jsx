import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Chips, Footer, SideBar } from "../../Components";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./explore.css";

export const Explore = () => {
  const [videodata, setVideodata] = useState([]);
  const fetchDatea = async () => {
    try {
      const response = await axios.get("api/videos");
      setVideodata(response.data.videos);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => fetchDatea(), []);
  return (
    <>
      <main className="dis_flex">
        <SideBar />
        <div className="video-container">
          <Chips />
          <div className="vide-card-conatiner dis_flex">
            {videodata.map(
              ({
                _id,
                title,
                videoLength,
                thumbnail,
                channelName,
                channelProfile,
                views,
                videos
              }) => {
                return (
                  <VideoCard
                    key={_id}
                    _id={_id}
                    thumbnail={thumbnail}
                    title={title}
                    videoLength={videoLength}
                    channelName={channelName}
                    channelProfile={channelProfile}
                    views={views}
                    videos={videodata}
                  />
                );
              }
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
