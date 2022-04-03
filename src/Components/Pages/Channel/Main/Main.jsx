import React from "react";
import Header from "./Left-side/LeftSide";
import RecommendedSide from "./Right-side/RightSide";

import "./Main.scss";

const Main = () => {
  return (
    <div className="channel__main">
      <RecommendedSide />
      <Header />
    </div>
  );
};
export default Main;