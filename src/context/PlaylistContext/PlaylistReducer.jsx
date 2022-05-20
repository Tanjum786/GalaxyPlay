const newPlaylist = (playlistId, playlists, playlistData) => {
  return playlists.reduce(
    (acc, cur) =>
      cur._id === playlistId ? [...acc, playlistData] : [...acc, cur],
    []
  );
};

export const PlaylistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "NEW_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistAction.payload,
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...playlistState,
        playlists: newPlaylist(
          playlistAction.payload.playlistId,
          playlistState.playlists,
          playlistAction.payload.playlistData
        ),
      };
    case "DELETE_VIDEO_FROM_PLAYLIST":
      return {
        ...playlistState,
        playlists: newPlaylist(
          playlistAction.payload.playlistId,
          playlistState.playlists,
          playlistAction.payload.playlistData
        ),
      };
    case "PLAYLIST_DELETE":
      return{
        ...playlistState,playlists:playlistAction.payload
      }
      
    case "NEW_PLAYLIST":
      return{
        ...playlistState,playlists:playlistAction.payload

      }
    default:
      return playlistState;
  }
};
