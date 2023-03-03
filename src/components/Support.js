import React, { useState } from "react";
import supportData from "./db/supportData";

const Support = () => {

  const [supports] = useState(supportData)
  const supportElements = supports.map((support) => {
    return (
      <div
        key={support.supportTitle}
        className="task-divider taskcard-title d-flex justify-content-between p-4 align-items-center"
      >
        <p>{support.supportTitle}</p>
        <p>{support.count}</p>
      </div>
    );
  });

  return <>{supportElements}</>;
};

export default Support;
