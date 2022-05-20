import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { RequireAuth } from "./Components/RequireAuth";
import {
  Explore,
  HistoryVideo,
  LikeVideo,
  Login,
  PlaylistVideo,
  Signup,
  SingleVideocardPage,
  SingleVideoPage,
  WatchLater,
} from "./Pages";
import { useModal } from "./context";
import { PlaylistModal } from "./Components";

function App() {
  const{modalState}=useModal();
  const {modalStatus}=modalState;
  return (
    <div className="App">
    {modalStatus?<PlaylistModal/>:null}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore/:videoId" element={<SingleVideoPage/>}/>
        <Route
          path="/wacthlater"
          element={
            <RequireAuth>
              <WatchLater />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <RequireAuth>
              <SingleVideocardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <PlaylistVideo />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <HistoryVideo />
            </RequireAuth>
          }
        />
        <Route
          path="/likevideo"
          element={
            <RequireAuth>
              <LikeVideo />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
