import React from "react";
import taskData from "./db/taskData";

const Task = () => {
    const taskElements = taskData.map(task => {
      return (
        <div
          key={task.taskTitle}
          className="task-divider taskcard-title d-flex justify-content-between p-4 align-items-center"
        >
          <p>{task.taskTitle}</p>
          <p>{task.count}</p>
        </div>
      );
    });

    return <>{taskElements}</>;
};

export default Task;
