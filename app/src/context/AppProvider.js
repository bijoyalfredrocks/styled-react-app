import React, { useContext, createContext, useReducer } from "react";
//import useFetch from "../hooks/useFetch";
import { AppReducer, intialState } from "../reducer/AppReducer";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(AppReducer, intialState);
 

  return (
    <AppContext.Provider value={{appState, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider;
export const useAppData = () => {
  return useContext(AppContext);
};