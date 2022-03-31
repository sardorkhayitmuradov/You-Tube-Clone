import React from "react";

import { Context as LoginContext} from "./Context/Login/Authentication";
import AuthenticatedApp from "./AuthenticatedApps";
import UnauthenticatedApp from "./UnauthenticatedApp";


function App() {
  const { token } = React.useContext(LoginContext);

  if (token) {
    return (
      <>
        <AuthenticatedApp />
      </>
    )  
  } else {
    return <>
      <UnauthenticatedApp />
    </>;
  }
}

export default App;
