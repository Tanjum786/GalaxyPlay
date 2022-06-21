import axios from "axios"

const getlikevideo= async (token,dispatchLikeVideo)=>{
    try {
        const response= await axios.get("/api/user/likes",{headers:{authorization:token}})
        dispatchLikeVideo({type:"GET_LIKE-VIDEO",payload:response.data.likes})

    } catch (error) {
        console.log(error)
    }
}

export{getlikevideo}