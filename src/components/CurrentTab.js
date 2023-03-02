import React from "react";

const CurrentTab = (props) => {
  const { title } = props;
  return <h2 className="text-center m-0 p-0">{title}</h2>;
};

export default CurrentTab;
