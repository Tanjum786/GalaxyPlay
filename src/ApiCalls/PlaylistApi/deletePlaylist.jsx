import axios from "axios";
import toast from "react-hot-toast";

const deletePlaylist = async (playlistId, token, dispatchplaylist) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    dispatchplaylist({type:"PLAYLIST_DELETE", payload:response.data.playlists})
    toast.info("playlist deleted from playlist")
  } catch (error) {
      console.error(error)
  }
};

export{deletePlaylist}