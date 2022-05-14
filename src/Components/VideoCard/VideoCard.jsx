import React from "react";
import "./videocard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { useState } from "react";
import { useLikeVideoContext } from "../../context/Liked-context/Likevideocontext";
import { useAuth } from "../../context/auth-context/AuthContext";
import { addtoLike } from "../../ApiCalls/LikeVideoApi/addtoLike";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deletelikeVideo } from "../../ApiCalls/LikeVideoApi/deletelikeVideo";

export const VideoCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
  views,
  videos,
}) => {
  const [iconOpen, setIconopen] = useState(false);
  const { likeVideoState, dispatchLikeVideo } = useLikeVideoContext();
  const { likes} = likeVideoState;
  const {userDetailes}=useAuth();
  const {token}=userDetailes;
  const navigate=useNavigate()


  const userLikedvideo=videos.find((item)=>item._id===_id)
  const likeHandler=(()=>{
    if (token) {
      addtoLike(userLikedvideo,token,dispatchLikeVideo)
      
    }else{
      navigate("/login")
      toast.warning("Need Login to like this video")
    }
  })

  const deleteHandler=(()=>{
    deletelikeVideo(_id,token,dispatchLikeVideo)
  })
  return (
    <>
      <section className="video-card-container">
        <div className="video-image-container">
          <img src={thumbnail} alt="thumbnail" />
          <small className="video-length">{videoLength}</small>
        </div>
        <footer className="dis_flex footer_container">
          <img
            src={channelProfile}
            className="avatar_border avatar_xs_size"
            alt="profile"
          />
          <div className="title-container dis_flex">
            <div className="video-title">
              {title}
              <div className="channel-container">
                <p className="channel-name">{channelName}</p>
                <p className="channel-views">{views}. 1year ago</p>
              </div>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical
              size="10px"
              className="threedots"
              onClick={() => setIconopen(!iconOpen)}
            />
            {iconOpen && (
              <>
                <div className="icons-container dis_flex">
                  {likes.some((item) => item._id === _id) ? (
                     <AiFillLike className="icons" onClick={deleteHandler} />
                  ) : (
                    <AiOutlineLike className="icons" onClick={likeHandler} />
                  )}
                  <MdOutlineWatchLater className="icons" />
                  <RiPlayListFill className="icons" />
                </div>
              </>
            )}
          </div>
        </footer>
        <div></div>
      </section>
    </>
  );
};
