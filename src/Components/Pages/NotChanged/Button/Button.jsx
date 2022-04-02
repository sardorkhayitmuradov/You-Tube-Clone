import React from "react";
import "./Button.scss";

const Buttons = ({ title, variant }) => {
  return <button className={variant}>{title}</button>;
};

export default Buttons;
