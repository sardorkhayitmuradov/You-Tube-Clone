import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Provider as LoginProvider } from "./Context/Login/Authentication";
import { Provider as ToggleProvider} from "./Context/Toggle/Toggle";
import { Provider as UsersProvider } from "./Context/Users/Users";
import { Provider as VideosProvider } from "./Context/Videos/Videos";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <LoginProvider>
          <VideosProvider>
            <UsersProvider>
              <App />
            </UsersProvider>
          </VideosProvider>
        </LoginProvider>
      </ToggleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
