import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [toggleButton, setToggleButton] = React.useState();

  return (
    <Context.Provider value={{ toggleButton, setToggleButton }}>{children}</Context.Provider>
  );
}

export { Context , Provider };