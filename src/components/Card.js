import React from "react";

const Card = (props) => {
  const { title, value } = props;
  return (
    <>
      <div className="card border-0">
        <h6>{title}</h6>
        <h3>{value}</h3>
      </div>
    </>
  );
};

export default Card;
