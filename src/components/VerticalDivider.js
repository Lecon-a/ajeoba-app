import React from "react";

const VerticalDivider = (props) => {
  const height = {
    height: props.height === "100" ? "100%" : props.height + "px",
  };
  return <div className="vertical-divider" style={height}></div>;
};

export default VerticalDivider;
