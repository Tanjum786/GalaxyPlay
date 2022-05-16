import { createContext, useReducer,useContext } from "react";
import { watchlaterReducer } from "./watchlaterReducer";

const watchlatercontext = createContext();

const usewatchlater = () => useContext(watchlatercontext);
const Watchlatercontextprovider = ({ children }) => {
  const [watchlaterState, dispatchWatchlater] = useReducer(watchlaterReducer, {
    watchLater: [],
  });
  return (
    <watchlatercontext.Provider value={{ watchlaterState, dispatchWatchlater }}>
      {children}
    </watchlatercontext.Provider>
  );
};

export { usewatchlater, Watchlatercontextprovider };
