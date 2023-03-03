import React from "react";
import { Link } from "react-router-dom";
import Support from "./Support";

const SupportCard = () => {
  return (
    <div className="task-card">
      <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
        <div>
          <h3>Unresolved tickets</h3>
          <p>
            Group <strong>Support</strong>
          </p>
        </div>
        <Link>View details</Link>
      </div>
      <div className="taskcard-details">
        <Support />
      </div>
    </div>
  );
};

export default SupportCard;
