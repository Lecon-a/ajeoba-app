import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";

const TaskCard = () => {
  
  return (
    <div className="task-card">
      <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
        <div>
          <h3>Task</h3>
          <p>
            Today
          </p>
        </div>
        <Link>View details</Link>
      </div>
      <div className="taskcard-details">
        <Task />
      </div>
    </div>
  );
};

export default TaskCard;
