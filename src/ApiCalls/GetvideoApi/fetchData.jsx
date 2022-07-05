import axios from "axios";
const fetchData = async (setVideodata,setloading) => {
    try {
      setloading(true)
      const response = await axios.get("api/videos");
      setVideodata(response.data.videos);
      setloading(false)
    } catch (error) {
      console.error(error);
    }
  };
export{fetchData}