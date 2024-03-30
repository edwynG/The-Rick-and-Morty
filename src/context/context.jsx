import React, { createContext, useState } from "react";

export const context = createContext();

export function ContextProvider(props) {
  const [count, setCount] = useState(0);

  let show = {
    count,
    setCount,
  };
  return(
  <context.Provider value={show}>
    {props.children}
  </context.Provider>);
}
