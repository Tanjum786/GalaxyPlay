import axios from "axios";
import { toast } from "react-toastify";

const addTowatchlater = async (video, token, dispatchWatchlater) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      { headers: { authorization: token } }
    );
    dispatchWatchlater({
      type: "WATCH_LATER_VIDEO",
      payload: response.data.watchlater,
    })
    toast.success(`${video.title.slice(0,15).trim()+'....'} added to watchlater`)
  } catch (error) {
      toast.error(error.response.data.errors[0])
  }
};
export { addTowatchlater };
