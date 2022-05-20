import axios from "axios";

export const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  token,
  dispatchplaylist
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );
    dispatchplaylist({
      type: "DELETE_VIDEO_FROM_PLAYLIST",
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
