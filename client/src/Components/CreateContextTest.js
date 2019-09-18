import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = props => {
  const [something, setSomething] = useState([
    {
      name: "Hi"
    },
    {
      name: "Hello"
    },
    {
      name: "Good Morning"
    },
    {
      name: "Howdy Partner"
    }
  ]);

  return (
    <Context.Provider value={[something, setSomething]}>
      {props.children}
    </Context.Provider>
  );
};
