import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import "./LikeCard.css";
import {
  addTowatchlater,
  deletelikeVideo,
  deleteWatchlater,
} from "../../ApiCalls";
import { useAuth, useLikeVideoContext, usewatchlater } from "../../context";
import { useNavigate } from "react-router-dom";
export const LikeCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
  const { userDetailes } = useAuth();
  const { dispatchLikeVideo, likeVideoState } = useLikeVideoContext();
  const navigate = useNavigate();
  const { dispatchWatchlater, watchlaterState } = usewatchlater();
  const { likes } = likeVideoState;
  const { token } = userDetailes;
  const { watchLater } = watchlaterState;

  const watchLatervideo = likes.find((item) => item._id === _id);

  const unlikeVideo = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
  };

  const watchLaterHandlerInlike = () => {
    addTowatchlater(watchLatervideo, token, dispatchWatchlater);
  };

  const watchlaterDeleteHandlerInLike = () => {
    deleteWatchlater(_id, token, dispatchWatchlater);
  };

  return (
    <>
      <section className="video-card-section dis_flex">
        <div className="video-img-div">

          <img
            className="video-image"
            src={thumbnail}
            alt="likedvideo-image"
            onClick={() => navigate(`/explore/${_id}`)}
         
          <img className="video-image" src={thumbnail} alt={title.slice(0,25)} /
          <small className="video-card-length">{videoLength}</small>
        </div>
        <div className="dis_flex title-container">
          <p className="video-card-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name"> {channelName}</p>
          </div>
          <div className="deleteIcon-container">
            <AiOutlineDelete className="icons-like" onClick={unlikeVideo} />
            {watchLater.some((items) => items._id === _id) ? (
              <MdWatchLater
                className="icons-like"
                onClick={watchlaterDeleteHandlerInLike}
              />
            ) : (
              <MdOutlineWatchLater
                className="icons-like"
                onClick={watchLaterHandlerInlike}
              />
            )}
            <RiPlayListFill className="icons-like" />
          </div>
        </div>
      </section>
    </>
  );
};
