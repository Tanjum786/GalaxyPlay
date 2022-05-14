import { createContext,useContext,useReducer } from "react"
import { LikeVideoReducer } from "./LikeVideoReducer"

const LikevideoContext=createContext()
const LikevideocontextProvider = ({children}) => {
    const [likeVideoState,dispatchLikeVideo]=useReducer(LikeVideoReducer,{likes:[]})
  return (
      <LikevideoContext.Provider value={{likeVideoState,dispatchLikeVideo}}>
          {children}
      </LikevideoContext.Provider>
  )
}

const useLikeVideoContext=()=>useContext(LikevideoContext)
export{LikevideocontextProvider,useLikeVideoContext}