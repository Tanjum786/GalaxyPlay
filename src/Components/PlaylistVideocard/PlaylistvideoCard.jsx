import React from "react";
import { AiOutlineDelete, AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { deleteVideoFromPlaylist, getSingleplaylist } from "../../ApiCalls";
import { useAuth, useplaylist } from "../../context";
import { useNavigate } from "react-router-dom";
export const Playlistvideocard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
  setPlaylistvideo,
  playlistId,
}) => {
  const { userDetailes } = useAuth();
  const navigate = useNavigate();
  const { dispatchplaylist } = useplaylist();

  const { token } = userDetailes;

  const deletevideoHandler = () => {
    deleteVideoFromPlaylist(playlistId, _id, token, dispatchplaylist);
    getSingleplaylist(token, setPlaylistvideo, playlistId);
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
            <p className="channel-name"> {channelName}</p>
          </div>
          <div className="deleteIcon-container">
            <AiOutlineDelete
              className="icons-like"
              onClick={deletevideoHandler}
            />
          </div>
        </div>
      </section>
    </>
  );
};
