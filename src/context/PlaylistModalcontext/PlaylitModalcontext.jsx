import { createContext, useContext, useReducer } from "react";
import { ModalReducer } from "./ModalReducer";
const PlaylistModalcontext = createContext();
const useModal = () => useContext(PlaylistModalcontext);

const PlaylistModalprovider = ({ children }) => {
  const [modalState, dispatchModal] = useReducer(ModalReducer,{modalStatus:false,video:{}})
  return (
    <PlaylistModalcontext.Provider value={{modalState,dispatchModal}}>
        {children}
    </PlaylistModalcontext.Provider>
  );
};

export { PlaylistModalprovider ,useModal};
