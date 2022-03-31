import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <Context.Provider value={{ checked, setChecked }}>
      {children}
    </Context.Provider>
  );
}

export { Provider, Context };