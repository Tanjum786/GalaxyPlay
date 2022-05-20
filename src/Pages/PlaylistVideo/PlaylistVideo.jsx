import React from "react";
import { Footer, Navbar, PlaylistCard, SideBar } from "../../Components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useModal, useplaylist } from "../../context";

export const PlaylistVideo = () => {
  const { dispatchModal } = useModal();
  const { playlistState } = useplaylist();
  const { playlists } = playlistState;
  const playlistHandler = (_id) => {
    dispatchModal({ type: "MODAL-OPEN" });
  };
  return (
    <>
      <Navbar />
      <main className="main-explore dis_flex">
        <SideBar />

        <section className="video-section dis_flex">
          <div className="page-container dis_flex">
            <h1 className="page-heading">Playlist - {playlists.length}</h1>
            <BsFillPlusCircleFill
              className="page-heading cursor"
              onClick={() => playlistHandler()}
            />
          </div>
          <div className="video-container dis_flex">
            {playlists.length !== 0 ? (
              <PlaylistCard playlists={playlists} />
            ) : (
              <h1 className="page-subHeading">No playlist Created yet</h1>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
