import axios from "axios";

export const deleteAllHistory = async (token, dispatchHistory) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });
    dispatchHistory({
      type: "DELETE_ALL_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
      console.error(error)
  }
};
