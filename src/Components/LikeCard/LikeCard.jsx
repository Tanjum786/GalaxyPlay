import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useState } from "react";
import "./LikeCard.css";
import { useAuth } from "../../context/auth-context/AuthContext";
import { useLikeVideoContext } from "../../context/Liked-context/Likevideocontext";
import { deletelikeVideo } from "../../ApiCalls/LikeVideoApi/deletelikeVideo";
export const LikeCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
  const [toggelTheedots, setToggelthreedots] = useState(false);
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { dispatchLikeVideo } = useLikeVideoContext();

  const unlikeVideo = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
  };

  return (
    <section className="likevideocard-section dis_flex">
      <div className="likevideo-img">
        <img className="like-image" src={thumbnail} alt="likedvideo-image" />
        <small className="like-video-length">{videoLength}</small>
      </div>
        <div>
          <p className="likevideo-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name"> {channelName}</p>
          </div>
        </div>
          <BsThreeDotsVertical
            className="threedots-container"
            onClick={() => setToggelthreedots(!toggelTheedots)}
          />
      {toggelTheedots && (
        <div className="liked-icons-container dis_flex">
          <AiOutlineDelete className="icons" onClick={unlikeVideo} />
          <MdOutlineWatchLater className="icons" />
          <RiPlayListFill className="icons" />
        </div>
      )}
    </section>
  );
};
