import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ToggleFeatures from "./Components/Toggle-Features/ToggleFeatures";
import Recommend from "./Components/Recommend/Users";

import './App.scss'

const AuthenticatedApp = () => {
  return (
    <div className="app">
      <Header/>
      <main className="main">
        <Main />
        <ToggleFeatures />
        <Recommend />
      </main>
    </div>
  );
};

export default AuthenticatedApp;