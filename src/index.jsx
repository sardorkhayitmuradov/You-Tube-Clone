import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Provider as LoginProvider } from "./Context/Login/Authentication";
import { Provider as ToggleProvider} from "./Context/Toggle/Toggle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ToggleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
