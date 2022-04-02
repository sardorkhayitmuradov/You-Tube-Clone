import React from "react";
import ArrowLeft from "../../../../Assets/Images/left.png";
import ArrowRight from "../../../../Assets/Images/right.png";
import "./Arrows.scss";

const Arrows = () => {
  return (
    <div className="arrows">
      <img className="arrow" src={ArrowLeft} alt="arrow" width='20px' height='20px' />
      <img className="arrow" src={ArrowRight} alt="right" width='20px' height='20px' />
    </div>
  );
};

export default Arrows;