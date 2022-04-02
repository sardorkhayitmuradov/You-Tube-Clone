import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [users, setUsers] = React.useState([]);

  return (
    <Context.Provider value={{ users, setUsers }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
