import { useContext, createContext, useReducer } from "react";
import { reducerFun } from "./reducerFun";

const initialState = {
    gender: "",
    color: [],
    type: [],
    price: []
  };

const FilterContext = createContext(initialState);

const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(reducerFun , initialState);

  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
