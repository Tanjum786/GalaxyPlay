import React from "react";
import { deleteAllHistory } from "../../ApiCalls";
import { Footer, HistroyCard, Navbar, SideBar } from "../../Components";
import { useAuth, useHistoryContext } from "../../context";

export const HistoryVideo = () => {
  const { HistoryVideoState, dispatchHistory } = useHistoryContext();
  const { userDetailes } = useAuth();
  const { token } = userDetailes;
  const { history } = HistoryVideoState;

  const deleteAllHistoryVideo = () => {
    deleteAllHistory(token, dispatchHistory);
  };
  return (
    <>
      <Navbar />
      <main className="dis_flex">
        <SideBar />

        <section className="video-section dis_flex">
          <div className="page-container">
            <h1 className="page-heading">History - {history.length}</h1>
            <button className="clear-btn" onClick={deleteAllHistoryVideo}>
              Clear ALL
            </button>
          </div>
          <div className="video-container dis_flex">
            {history.length !== 0
              ? history.map((item) => {
                  return <HistroyCard key={item._id} {...item} />;
                })
              : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
