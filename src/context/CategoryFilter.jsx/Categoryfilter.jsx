import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "./categoryReducer";

const categoryContext = createContext();
const useCategory = () => useContext(categoryContext);
const CatergoryProvider = ({ children }) => {
  const [categoryState, dispatchCategory] = useReducer(categoryReducer, {
    category: "",
  });
  return (
    <categoryContext.Provider value={{ categoryState, dispatchCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export { useCategory, CatergoryProvider };
