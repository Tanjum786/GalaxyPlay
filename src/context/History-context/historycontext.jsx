import { createContext, useContext, useReducer } from "react";
import { HistoryvideoReducer } from "./HistoryvideoReducer.1";

const Historycontext = createContext();
const useHistoryContext = () => useContext(Historycontext);
const HistorycontextProvider = ({ children }) => {
  const [HistoryVideoState, dispatchHistory] = useReducer(HistoryvideoReducer, {
    history: [],
  });
  return (
    <Historycontext.Provider value={{ HistoryVideoState, dispatchHistory }}>
      {children}
    </Historycontext.Provider>
  );
};

export { useHistoryContext, HistorycontextProvider };
