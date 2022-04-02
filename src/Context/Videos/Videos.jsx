import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [videos, setVideos] = React.useState([]);

  return (
    <Context.Provider value={{ videos, setVideos }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };