import React from "react";
import { AiFillLike, AiOutlineLike, AiOutlineDelete } from "react-icons/ai";
import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  addtoLike,
  addTowatchlater,
  deletehistoryVideo,
  deletelikeVideo,
  deleteWatchlater,
} from "../../ApiCalls";
import {
  useAuth,
  useHistoryContext,
  useLikeVideoContext,
  useModal,
  usewatchlater,
} from "../../context";
import { SingleVideoPage } from "../../Pages";

export const HistroyCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { dispatchLikeVideo, likeVideoState } = useLikeVideoContext();
  const {dispatchModal}=useModal()

  const { likes } = likeVideoState;
  const { dispatchWatchlater, watchlaterState } = usewatchlater();
  const { watchLater } = watchlaterState;
  const { HistoryVideoState, dispatchHistory } = useHistoryContext();
  const { history } = HistoryVideoState;
  const navigate = useNavigate();
  const userLikedvideo = history.find((item) => item._id === _id);
  const video = history.find((item) => item._id === _id);
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

  const historydlelete = () => {
    deletehistoryVideo(_id, token, dispatchHistory);
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
          />
          <small className="video-card-length">{videoLength}</small>
        </div>
        <div className="dis_flex title-container">
          <p className="video-card-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name"> {channelName}</p>
          </div>
          <div className="deleteIcon-container">
            {likes.some((item) => item._id === _id) ? (
              <AiFillLike className="icons-like" onClick={deleteHandler} />
            ) : (
              <AiOutlineLike className="icons-like" onClick={likeHandler} />
            )}
            {watchLater.some((items) => items._id === _id) ? (
              <MdWatchLater
                className="icons-like"
                onClick={watchlaterDeleteHandler}
              />
            ) : (
              <MdOutlineWatchLater
                className="icons-like"
                onClick={watchLaterHandler}
              />
            )}
            <RiPlayListFill className="icons-like"  onClick={()=>dispatchModal({ type:"MODAL-OPEN", payload:video })} />
            <AiOutlineDelete className="icons-like" onClick={historydlelete} />
          </div>
        </div>
      </section>
    </>
  );
};
