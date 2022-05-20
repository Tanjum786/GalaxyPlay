import { createContext, useContext, useReducer } from "react";
import { PlaylistReducer } from "./PlaylistReducer";

const playlistcontext = createContext();
const useplaylist = () => useContext(playlistcontext);

const PlaylistProvider = ({ children }) => {
  const [playlistState, dispatchplaylist] = useReducer(PlaylistReducer, {
    playlists: [],
  });
  return (
    <playlistcontext.Provider value={{ playlistState, dispatchplaylist }}>
      {children}
    </playlistcontext.Provider>
  );
};

export { useplaylist, PlaylistProvider };
