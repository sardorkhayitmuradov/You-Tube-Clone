import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [toggle, setToggle] = React.useState();

  return (
    <Context.Provider value={{ toggle, setToggle }}>{children}</Context.Provider>
  );
}

export { Context , Provider };