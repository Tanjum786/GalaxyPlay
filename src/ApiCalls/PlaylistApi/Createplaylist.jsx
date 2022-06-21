import axios from "axios";
import toast from "react-hot-toast";

export const Createplaylist = async (playlist, dispatchplaylist, token) => {
  const response = await axios.post(
    "/api/user/playlists",
    { playlist },
    { headers: { authorization: token } }
  );
  try {
    if (response.status === 201) {
      dispatchplaylist({
        type: "NEW_PLAYLIST",
        payload: response.data.playlists,
      });
      toast.success("playlist created")

    }
  } catch (error) {}
};
