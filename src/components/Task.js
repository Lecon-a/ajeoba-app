import React, { useState } from "react";
import taskData from "./db/taskData";

const Task = () => {

  const [taskState, setTaskState] = useState(false)

  const handleChange = (name) => {
    alert(name)
    setTaskState(prevTaskState => !prevTaskState)
  }

  const taskElements = taskData.map((task, index) => {
    return (
      <div
        key={`task-${index}`}
        className="task-divider taskcard-title d-flex justify-content-between p-3 align-items-center"
      >
        <div className="d-flex align-items-center gap-12">
          {index > 0 && (
            <input
              name={`task-${index}`}
              type="checkbox"
              value={taskState}
              onChange={() => handleChange(`task-${index}`)}
            />
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
