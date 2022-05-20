import axios from "axios";

const getSingleplaylist = async (token, setPlaylistvideo, playlistId) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    setPlaylistvideo(response.data.playlist);
  } catch (error) {
    console.log(error);
  }
};

export{getSingleplaylist}
