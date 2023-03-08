import React, { createContext, useState, useContext } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return <stateContext value={{ activeMenu }}>{children}</stateContext>;
};

export const useStateContext = () => useContext(stateContext);
