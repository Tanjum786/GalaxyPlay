import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToHistory,
  addtoLike,
  addTowatchlater,
  deletelikeVideo,
  deleteWatchlater,
  SinglevideoApi,
} from "../../ApiCalls";
import { Footer, Navbar, SideBar } from "../../Components";
import "./Singlevideo.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import {
  useAuth,
  useHistoryContext,
  useLikeVideoContext,
  useModal,
  usewatchlater,
} from "../../context";
import { toast } from "react-toastify";

export const SingleVideoPage = () => {
  const [Video, setvideo] = useState({});
  const { videoId } = useParams();
  const { likeVideoState, dispatchLikeVideo } = useLikeVideoContext();
  const { watchlaterState, dispatchWatchlater } = usewatchlater();
  const { HistoryVideoState, dispatchHistory } = useHistoryContext();
  const { userDetailes } = useAuth();
  const { history } = HistoryVideoState;
  const { watchLater } = watchlaterState;
  const { likes } = likeVideoState;
  const { token } = userDetailes;
  const {dispatchModal}=useModal()

  const navigate = useNavigate();

  const likeHandler = () => {
    if (token) {
      addtoLike(Video, token, dispatchLikeVideo);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };

  const deleteHandler = () => {
    deletelikeVideo(Video._id, token, dispatchLikeVideo);
  };

  const watchLaterHandler = (_id) => {
    if (token) {
      addTowatchlater(Video, token, dispatchWatchlater);
    } else {
      navigate("/login");
      toast.warning("Need Login to like this video");
    }
  };
  const watchlaterDeleteHandler = () => {
    deleteWatchlater(Video._id, token, dispatchWatchlater);
  };

  const addtohistoryHandler = () => {
    addToHistory(Video, token, dispatchHistory);
  };

  const playlistHandler=()=>{
if (token){
  dispatchModal({ type:"MODAL-OPEN", payload:Video })
}
else{
  navigate("/login");
  toast.warning("Needs to login to create playlist")
}
  }
  SinglevideoApi(videoId, setvideo);

  return (
    <>
      <Navbar />
      <div className="singlevideo-maindiv">
        <SideBar />
        <div className="single-video-conatainer dis_flex">
          <section className="single-video-display">
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${Video.VideoId}`}
              controls={true}
              playing={true}
              onStart={addtohistoryHandler}
            />
          </section>
          <p className="single-video-title">{Video.title}</p>
          <div className="singlepage-icon-container dis_flex">
            <p className="views-par">{Video.views} . 20 march 2020</p>
            <div className="singlepage-icons-container dis_flex">
              {likes.some((item) => item._id === Video._id) ? (
                <AiFillLike
                  className="singlepage-icons"
                  onClick={deleteHandler}
                />
              ) : (
                <AiOutlineLike
                  className="singlepage-icons"
                  onClick={likeHandler}
                />
              )}
              {watchLater.some((items) => items._id === Video._id) ? (
                <MdWatchLater
                  className="singlepage-icons"
                  onClick={watchlaterDeleteHandler}
                />
              ) : (
                <MdOutlineWatchLater
                  className="singlepage-icons"
                  onClick={watchLaterHandler}
                />
              )}
              <RiPlayListFill className="singlepage-icons" onClick={playlistHandler}/>
            </div>
          </div>
          <div className="discription-container dis_flex">
            <p className="discription-par">
              <strong>Discription :</strong> {Video.discription}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
