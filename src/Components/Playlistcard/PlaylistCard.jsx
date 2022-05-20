import React from "react";
import { NavLink } from "react-router-dom";
import "./playlistcard.css";
import { BsTrash } from "react-icons/bs";
import { deletePlaylist, getplaylist } from "../../ApiCalls";
import { useAuth, useplaylist } from "../../context";
import { useEffect } from "react";
export const PlaylistCard = ({ playlists }) => {
  const { dispatchplaylist } = useplaylist();
  const { userDetailes } = useAuth();
  const { token } = userDetailes;

  const deleteplaylistHandler = (playlistId) => {
    deletePlaylist(playlistId, token, dispatchplaylist);
  };
  useEffect(()=>getplaylist(token,deletePlaylist),[])
  return (
    <>
      {playlists.map((item) => {
        return (
          <div className="playlistCard-container dis_flex" key={item._id}>
            <NavLink
              to={`/playlist/${item._id}`}
            >
              <div className="playlistsCard">
                <h2>{item.title}</h2>
                <p className="video_title">{item.videos.length} videos</p>
              </div>
            </NavLink>
            <BsTrash onClick={() => deleteplaylistHandler(item._id)} />
          </div>
        );
      })}
    </>
  );
};
