import React, { useState, useContext, useReducer } from "react";

const AppContext = React.createContext();
const initialState = {};
const reducer = (state, action) => {
  switch (action.type) {
  }
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
