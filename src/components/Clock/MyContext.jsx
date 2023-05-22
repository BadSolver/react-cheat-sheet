import React, { createContext, useState } from "react";

const defaultValue = {
  count: 0,
  incrementCount: () => {},
};

export const MyContext = createContext(defaultValue);

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const contextValue = {
    count,
    incrementCount,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
