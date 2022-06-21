import React, { useState } from "react";
import "./playlistmodal.css";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth, useModal, usewatchlater, useplaylist } from "../../context";
import { useLocation } from "react-router-dom";
import {
  addTowatchlater,
  addVideoToPlaylist,
  Createplaylist,
  deleteVideoFromPlaylist,
  deleteWatchlater,
} from "../../ApiCalls";
import toast from "react-hot-toast";
export const PlaylistModal = () => {
  const { modalState, dispatchModal } = useModal();
  const { userDetailes } = useAuth();
  const location = useLocation();
  const [openCreate, setOpenCreatePlaylist] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ title: "" });
  const { watchlaterState, dispatchWatchlater } = usewatchlater();
  const { playlistState, dispatchplaylist } = useplaylist();
  const { playlists } = playlistState;
  const { token } = userDetailes;
  const { video } = modalState;
  const { watchLater } = watchlaterState;

  const playlistNameHandler = (e) => {
    setNewPlaylist({ ...newPlaylist, title: e.target.value });
  };

  const checkPlaylist = (title) => {
    if (playlists.find((item) => item.title === title)) {
      toast.error("Playlist is already exist");
    } else if (newPlaylist.title === "") {
      toast.warning("Please enter playlist name");
    } else {
      return true;
    }
  };

  const createPlaylistHandler = () => {
    {
      location.pathname === "/playlist"
        ? dispatchModal({ type: "MODAL-CLOSE" })
        : null;
    }

    if (checkPlaylist(newPlaylist.title)) {
      Createplaylist(newPlaylist, dispatchplaylist, token, video);
    }
    setNewPlaylist({ ...newPlaylist, title: "" });
  };

  const checkvideoInplaylist = (_id) => {
    const playlist = playlists.find((item) => item._id === _id);
    return playlist.videos.some((item) => item._id === video._id);
  };

  const AddtoPlaylist = (_id) => {
    if (checkvideoInplaylist(_id)) {
      deleteVideoFromPlaylist(_id, video._id, token, dispatchplaylist);
    } else {
      addVideoToPlaylist(_id, video, token, dispatchplaylist);
      dispatchModal({ type: "MODAL-CLOSE" })
      setOpenCreatePlaylist(true)
    }
  };

  const checkVideoIsinWatchlater = () =>
    watchLater.some((item) => item._id === video._id);

  const callwatchlaterVideoionAction = () => {
    if (checkVideoIsinWatchlater()) {
      deleteWatchlater(video._id, token, dispatchWatchlater);
    } else {
      addTowatchlater(video, token, dispatchWatchlater);
    }
  };
  return (
    <>
      <div
        className="modal-overly"
        onClick={() => dispatchModal({ type: "MODAL-CLOSE" })}
      ></div>

      <div className="modal-wraper">
        <h1 className="modal-heading border-bottom dis_flex">
          Save to....
          <MdOutlineClose
            onClick={() => dispatchModal({ type: "MODAL-CLOSE" })}
            size="20px"
            className="close-btn"
          />
        </h1>
        <div className="playlist-container dis_flex">
          <div>
            {location.pathname !== "/playlist" ? (
              <>
                <input
                  type="checkbox"
                  id="watch-later"
                  checked={checkVideoIsinWatchlater()}
                  onChange={callwatchlaterVideoionAction}
                />
                <label htmlFor="watch-later"> Watch Later</label>
              </>
            ) : null}
          </div>
          {playlists.map(({ _id, title }) => (
            <div key={_id}>
              {location.pathname === "/playlist" ? (
                <ul className="playlists">
                  <li>{title}</li>
                </ul>
              ) : (
                <>
                  <input
                    type="checkbox"
                    id={_id}
                    checked={checkvideoInplaylist(_id)}
                    onChange={() => AddtoPlaylist(_id)}
                  />
                  <label htmlFor={_id}>{title}</label>
                </>
              )}
            </div>
          ))}
        </div>
        {!openCreate ? (
          <>
            <div className="create-container border-top dis_flex">
              <AiOutlinePlus size="20px" />
              <button
                className="Newcreate-btn"
                onClick={() => setOpenCreatePlaylist(true)}
              >
                create New playlist
              </button>
            </div>
          </>
        ) : (
          <div className="create-div border-top">
            <input
              className="create-input-filed dis_flex"
              placeholder="Enter Your Playlist Name"
              value={newPlaylist.title}
              onChange={playlistNameHandler}
              required
            />
            <button className="create-btn" onClick={createPlaylistHandler}>
              Create
            </button>
          </div>
        )}
      </div>
    </>
  );
};
