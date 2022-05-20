import axios from 'axios'

export const deletehistoryVideo = async(videoId,token,dispatchHistory) => {
  try {
      const response=await axios.delete(`/api/user/history/${videoId}`,{headers:{authorization:token}})
    dispatchHistory({type:"DELETE_HISTORY",payload:response.data.history})
  } catch (error) {
      console.error(error)
  }
}
