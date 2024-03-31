import React, { createContext, useState } from "react";

export const context = createContext();

const url = [
  { name: "Home", href: "/" },
  { name: "Location", href: "/Contact" },
  { name: "Characters", href: "/Characters" },
];

export function ContextProvider(props) {
  const [count, setCount] = useState(0);

  let show = {
    count,
    setCount,
    url,
  };
  return(
  <context.Provider value={show}>
    {props.children}
  </context.Provider>);
}
