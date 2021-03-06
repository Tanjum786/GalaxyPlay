import React, { useState } from "react";
import "./videocard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  addtoLike,
  addTowatchlater,
  deletelikeVideo,
  deleteWatchlater,
} from "../../ApiCalls";
import {
  useAuth,
  useLikeVideoContext,
  useModal,
  usewatchlater,
} from "../../context";
import toast from "react-hot-toast";

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
  const { watchlaterState, dispatchWatchlater } = usewatchlater();
  const navigate = useNavigate();
  const { userDetailes } = useAuth();
  const { dispatchModal } = useModal();

  const { likes } = likeVideoState;
  const { token } = userDetailes;
  const { watchLater } = watchlaterState;

  const userLikedvideo = videos.find((item) => item._id === _id);
  const video = videos.find((item) => item._id === _id);
  const likeHandler = () => {
    if (token) {
      addtoLike(userLikedvideo, token, dispatchLikeVideo);
      setIconopen(!iconOpen);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };

  const deleteHandler = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
    setIconopen(!iconOpen);
  };

  const watchLaterHandler = (_id) => {
    if (token) {
      addTowatchlater(video, token, dispatchWatchlater);
      setIconopen(!iconOpen);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };
  const watchlaterDeleteHandler = () => {
    deleteWatchlater(_id, token, dispatchWatchlater);
    setIconopen(!iconOpen);
  };

  const playlistHandler = (_id) => {
    if (token) {
      dispatchModal({ type: "MODAL-OPEN", payload: video });
      setIconopen(!iconOpen);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
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
                  <RiPlayListFill
                    className="icons"
                    onClick={() => playlistHandler(_id)}
                  />
                </div>
              </>
            )}
          </div>
        </footer>
      </section>
    </>
  );
};
