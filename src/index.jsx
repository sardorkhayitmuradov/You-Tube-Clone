import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Provider as LoginProvider } from "./Context/Login/Authentication";
import { Provider as UsersProvider } from "./Context/Users/Users";
import { Provider as VideosProvider } from "./Context/Videos/Videos";
import { Provider as ThemeProvider } from './Context/Theme/Theme';
import { Context as MenuProvider } from "./Context/Menu/Menu";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <LoginProvider>
          <ThemeProvider>
            <VideosProvider>
              <UsersProvider>
                <MenuProvider.Provider value={"Hello Shmello"}>
                  <App />
                </MenuProvider.Provider>
              </UsersProvider>
            </VideosProvider>
          </ThemeProvider>
        </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
