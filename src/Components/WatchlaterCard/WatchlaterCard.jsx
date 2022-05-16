import React from "react";
import { AiOutlineDelete, AiOutlineLike,AiFillLike } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { addtoLike, deletelikeVideo, deleteWatchlater } from "../../ApiCalls";
import { useAuth, useLikeVideoContext, usewatchlater } from "../../context";

export const WatchlaterCard = ({
  title,
  videoLength,
  thumbnail,
  channelName,
  _id,
}) => {
const {userDetailes}=useAuth();
const {token}=userDetailes;
const {dispatchWatchlater,watchlaterState}=usewatchlater()
const {watchLater}=watchlaterState;
const{dispatchLikeVideo,likeVideoState}=useLikeVideoContext()
const {likes}=likeVideoState;


const likevideo=watchLater.find((item)=>item._id===_id)

const addtoLikeHandler=(()=>{
  addtoLike(likevideo,token,dispatchLikeVideo)
})

const deleteformlike=(()=>{
  deletelikeVideo(_id,token,dispatchLikeVideo)
})
 const watchlaterDeleteHandler=(()=>{
   deleteWatchlater(_id,token,dispatchWatchlater)
 })
  return (
    <>
      <section className="video-card-section dis_flex">
        <div className="video-img-div">
          <img className="video-image" src={thumbnail} alt="likedvideo-image" />
          <small className="video-card-length">{videoLength}</small>
        </div>
        <div className="dis_flex title-container">
          <p className="video-card-title">{title}</p>
          <div className="channel-container">
            <p className="channel-name">{channelName}</p>
          </div>
          <div className="deleteIcon-container">
            <AiOutlineDelete className="icons-like" onClick={watchlaterDeleteHandler}/>
            {likes.some((item) => item._id === _id) ? (
                    <AiFillLike className="icons-like" onClick={deleteformlike}/>
                  ) : (
                    <AiOutlineLike className="icons-like" onClick={addtoLikeHandler} />
                  )}
            <RiPlayListFill className="icons-like" />
          </div>
        </div>
      </section>
    </>
  );
};
