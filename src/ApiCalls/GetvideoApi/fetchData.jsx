import axios from "axios";
const fetchData = async (setVideodata) => {
    try {
      const response = await axios.get("api/videos");
      setVideodata(response.data.videos);
    } catch (error) {
      console.error(error);
    }
  };
export{fetchData}