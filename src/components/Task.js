import React, { useState } from "react";
import taskData from "./db/taskData";

const Task = () => {
  const [taskState, setTaskState] = useState(false);
  const [tasks] = useState(taskData);

  const handleChange = () => {
    setTaskState((prevTaskState) => !prevTaskState);
  };

  const taskElements = tasks.map((task, index) => {
    return (
      <div
        key={`task-${index}`}
        className="task-divider taskcard-title d-flex justify-content-between p-3 align-items-center"
      >
        <div className="d-flex align-items-center gap-30">
          {index > 0 && (
            <div className="round">
              <input
                className="task-checkbox"
                name={`task-${index}`}
                type="checkbox"
                value={taskState}
                id={`task-${index}`}
                onChange={handleChange}
              />
              <label htmlFor={`task-${index}`} id={`task-${index}`} />
            </div>
          )}
          <p>{task.taskTitle}</p>
        </div>
        {task.action}
      </div>
    );
  });

  return <>{taskElements}</>;
};

export default Task;
