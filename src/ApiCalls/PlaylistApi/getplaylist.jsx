import axios from "axios";
import { toast } from "react-toastify";

const getplaylist = async (token, dispatchplaylist) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
    dispatchplaylist({
      type: "NEW_PLAYLIST",
      payload: response.data.playlists,
    });
  } catch (error) {
      toast.error(response.data.errors[0])
  }
};

export{getplaylist}