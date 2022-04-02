import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import "./Pages.scss";
const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Pages;
