import axios from "axios"

export const addToHistory =async (video,token,dispatchHistory) => {
    try {
        const response=await axios.post("/api/user/history",{video},{headers:{authorization:token}})
        dispatchHistory({type:"ADD_TO_HISTORY",payload:response.data.history})

    } catch (error) {
        console.error(error)
    }
  
}
