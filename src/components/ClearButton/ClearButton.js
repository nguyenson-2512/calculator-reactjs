import React from "react";
import "./ClearButton.css";

const ClearButton = (props) => {
  return <div className="clear-button" onClick={props.clearHandle}>{props.children}</div>;
};

export default ClearButton;
