import React from "react";

const HorizontalDivider = (props) => {
  const width = { width: props.width === "100" ? "100%" : props.width + "px" };
  return <div className="divider horizontal-divider" style={width}></div>;
};

export default HorizontalDivider;
