import React, { useState } from "react";
import "./videocard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addtoLike,
  addTowatchlater,
  deletelikeVideo,
  deleteWatchlater,
} from "../../ApiCalls";
import { useAuth, useLikeVideoContext, usewatchlater } from "../../context";

export const VideoCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
  views,
  videos,
}) => {
  const [iconOpen, setIconopen] = useState(false);
  const { likeVideoState, dispatchLikeVideo } = useLikeVideoContext();
  const { likes } = likeVideoState;
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { watchlaterState, dispatchWatchlater } = usewatchlater();
  const { watchLater } = watchlaterState;
  const navigate = useNavigate();

  const userLikedvideo = videos.find((item) => item._id === _id);
  const video = videos.find((item) => item._id === _id);
  const likeHandler = () => {
    if (token) {
      addtoLike(userLikedvideo, token, dispatchLikeVideo);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };

  const deleteHandler = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
  };

  const watchLaterHandler = (_id) => {
    if (token) {
      addTowatchlater(video, token, dispatchWatchlater);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };
  const watchlaterDeleteHandler = () => {
    deleteWatchlater(_id, token, dispatchWatchlater);
  };
  return (
    <>
      <section>
        <div className="video-image-container">
          <img
            src={thumbnail}
            alt={title.slice(0.25)}
            onClick={() => navigate(`/explore/${_id}`)}
          />
          <img src={thumbnail} alt={title.slice(0.25)} />
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
          <div>
            <BsThreeDotsVertical
              size="10px"
              className="threedots"
              onClick={() => setIconopen(!iconOpen)}
            />
            {iconOpen && (
              <>
                <div className="icons-container dis_flex">
                  {likes.some((item) => item._id === _id) ? (
                    <AiFillLike className="icons" onClick={deleteHandler} />
                  ) : (
                    <AiOutlineLike className="icons" onClick={likeHandler} />
                  )}
                  {watchLater.some((items) => items._id === _id) ? (
                    <MdWatchLater
                      className="icons"
                      onClick={watchlaterDeleteHandler}
                    />
                  ) : (
                    <MdOutlineWatchLater
                      className="icons"
                      onClick={watchLaterHandler}
                    />
                  )}
                  <RiPlayListFill className="icons" />
                </div>
              </>
            )}
          </div>
        </footer>
        <div></div>
      </section>
    </>
  );
};
