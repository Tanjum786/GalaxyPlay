import axios from "axios"
import toast from "react-hot-toast"

const deletelikeVideo=async (videoId,token,dispatchLikeVide)=>{

    try {
        const response=await axios.delete(`/api/user/likes/${videoId}`,{headers:{authorization:token}})
        dispatchLikeVide({type:"DELETE_LIKE_VIDEO",payload:response.data.likes})
        toast.info("Removed from likes video")
    } catch (error) {
        toast.error(error.response.data.errors[0])
    }
}

export{deletelikeVideo}