import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import "./LikeCard.css";
import { useAuth } from "../../context/auth-context/AuthContext";
import { useLikeVideoContext } from "../../context/Liked-context/Likevideocontext";
import { deletelikeVideo } from "../../ApiCalls";
export const LikeCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { dispatchLikeVideo } = useLikeVideoContext();

  const unlikeVideo = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
  };

  return (
    <>
      <section className="likevideocard-section dis_flex">
        <div className="likevideo-img">
          <img className="like-image" src={thumbnail} alt="likedvideo-image" />
          <small className="like-video-length">{videoLength}</small>
        </div>
        <div className="dis_flex title-container">
          <p className="likevideo-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name"> {channelName}</p>
          </div>
          <div className="deleteIcon-container">
            <AiOutlineDelete
              className="icons-like"
              onClick={unlikeVideo}
            />
            <MdOutlineWatchLater className="icons-like" />
            <RiPlayListFill className="icons-like" />
          </div>
        </div>
      </section>
    </>
  );
};
