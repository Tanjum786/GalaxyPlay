import React from "react";
import { AiOutlineDelete, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { addtoLike, deletelikeVideo, deleteWatchlater } from "../../ApiCalls";
import {
  useAuth,
  useLikeVideoContext,
  useModal,
  usewatchlater,
} from "../../context";

export const WatchlaterCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
  const { userDetailes } = useAuth();
  const { dispatchWatchlater, watchlaterState } = usewatchlater();
  const { dispatchLikeVideo, likeVideoState } = useLikeVideoContext();
  const navigate = useNavigate();
  const { dispatchModal } = useModal();

  const { likes } = likeVideoState;
  const { watchLater } = watchlaterState;
  const { token } = userDetailes;
  const video = watchLater.find((item) => item._id === _id);

  const likevideo = watchLater.find((item) => item._id === _id);

  const addtoLikeHandler = () => {
    addtoLike(likevideo, token, dispatchLikeVideo);
  };

  const deleteformlike = () => {
    deletelikeVideo(_id, token, dispatchLikeVideo);
  };
  const watchlaterDeleteHandler = () => {
    deleteWatchlater(_id, token, dispatchWatchlater);
  };
  return (
    <>
      <section className="video-card-section dis_flex">
        <div className="video-img-div">
          <img
            className="video-image"
            src={thumbnail}
            alt={title.slice(0, 25)}
            onClick={() => navigate(`/explore/${_id}`)}
          />
          <small className="video-card-length">{videoLength}</small>
        </div>
        <div className="dis_flex title-container">
          <p className="video-card-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name">{channelName}</p>
          </div>
          <div className="deleteIcon-container">
            <AiOutlineDelete
              className="icons-like"
              onClick={watchlaterDeleteHandler}
            />
            {likes.some((item) => item._id === _id) ? (
              <AiFillLike className="icons-like" onClick={deleteformlike} />
            ) : (
              <AiOutlineLike
                className="icons-like"
                onClick={addtoLikeHandler}
              />
            )}
            <RiPlayListFill
              className="icons-like"
              onClick={() =>
                dispatchModal({ type: "MODAL-OPEN", payload: video })
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};
