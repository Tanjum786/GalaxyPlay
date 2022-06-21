import axios from "axios";
import toast from "react-hot-toast";

export const deleteWatchlater = async (videoId, token, dispatchWatchlater) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token },
    });
    dispatchWatchlater({type:"DELETE_WATCHLATER",payload:response.data.watchlater})
    toast.info("Removed from watch later")
  } catch (error) {
      toast.error(error.response.data.errors[0])
  }
};
