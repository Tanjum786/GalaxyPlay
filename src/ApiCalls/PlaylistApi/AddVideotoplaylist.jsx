import axios from "axios";
import toast from "react-hot-toast";

const addVideoToPlaylist = async (playlistId, video, token, dispatchplaylist) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      { headers: { authorization: token } }
    );
    dispatchplaylist({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    });
    console.log(video.title)
    toast.success(`${video.title.slice(0,30).trim()+"...."} added to Playlist`)

  } catch (error) {
    toast.error(response.data.errors[0]);
  }
};

export { addVideoToPlaylist };
