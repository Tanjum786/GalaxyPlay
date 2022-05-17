import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData, getcategorydata } from "../../ApiCalls";
import { Footer, Navbar, SideBar, VideoCard } from "../../Components";
import { useCategory } from "../../context";
import { filterdata, searchFilter } from "../../utility";
import "./explore.css";

export const Explore = () => {
  const [videodata, setVideodata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setsearch] = useState("");
  const { categoryState, dispatchCategory } = useCategory();
  const { category } = categoryState;

  useEffect(() => fetchData(setVideodata), []);
  useEffect(() => getcategorydata(setCategories), []);

  const categoryfilter = filterdata(category, videodata);

  const searchFiltervideo = searchFilter(categoryfilter, searchQuery);
  return (
    <>
      <Navbar searchQuery={searchQuery} setsearch={setsearch} />
      <main className="dis_flex">
        <SideBar />
        <div className="mainvideo-container">
          <nav className="chips-container">
            <div className="chips-list dis_flex">
              <button
                className="btn-singer-name"
                onClick={() => dispatchCategory({ type: "CLEAR_CATEGORY" })}
              >
                All
              </button>
              {categories.map((cate) => (
                <button
                  className="btn-singer-name"
                  onClick={() =>
                    dispatchCategory({
                      type: "SELECT_CATEGORY",
                      payload: cate.categoryName,
                    })
                  }
                >
                  {cate.categoryName}
                </button>
              ))}
            </div>
          </nav>
          <div className="video-card-conatiner dis_flex">
            {searchFiltervideo.length !== 0 ? (
              searchFiltervideo.map((video) => {
                return (
                  <VideoCard
                    key={videodata._id}
                    {...video}
                    videos={videodata}
                  />
                );
              })
            ) : (
              <h1>No such video exist</h1>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
