import React from "react";
import "./videocard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useState } from "react";

export const VideoCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
  views,
  video,
}) => {
  const [iconOpen, setIconopen] = useState(false);
  return (
    <>
      <section className="video-card-container">
        <div className="video-image-container">
          <img src={thumbnail} alt="thumbnail" />
          <small className="video-length">{videoLength}</small>
        </div>
        <footer className="dis_flex footer_container">
          <img
            src={channelProfile}
            className="avatar_border avatar_xs_size"
            alt="profile"
          />
          <div className="title-container dis_flex">
            <div className="video-title">
              {title}
              <div className="channel-container">
                <p className="channel-name">{channelName}</p>
                <p className="channel-views">{views}. 1year ago</p>
              </div>
            </div>
          </div>
          <BsThreeDotsVertical
            size="10px"
            className="threedots"
            onClick={() => setIconopen(!iconOpen)}
          />
          {iconOpen && (
            <>
              <div className="icons-container dis_flex">
                <AiOutlineLike className="icons" />
                <MdOutlineWatchLater className="icons" />
                <RiPlayListFill className="icons" />
              </div>
            </>
          )}
        </footer>
        <div></div>
      </section>
    </>
  );
};
