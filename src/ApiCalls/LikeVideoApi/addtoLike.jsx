import axios from "axios";
import toast from "react-hot-toast";


const addtoLike = async (video, token, dispatchLikeVideo) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      { headers: { authorization: token } }
    );
    dispatchLikeVideo({ type: "LIKE_VIDEO", payload: response.data.likes });
    toast.success(`${video.title.slice(0,30).trim()+"...."} added to likes`)
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export {addtoLike}