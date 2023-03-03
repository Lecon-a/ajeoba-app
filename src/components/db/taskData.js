import { AiOutlinePlus } from "react-icons/ai";

const taskData = [
  {
    taskTitle: "Create new task",
    action: (
      <button className="border-0 p-2" style={{borderRadius: 23}}>
        <AiOutlinePlus className="fs-4" />
      </button>
    ),
  },
  {
    taskTitle: "Awaiting Customer Response",
    action: (
      <button className="border-0 py-2 px-3 bg-warning text-white bold" style={{borderRadius: 23}}>
        URGENT
      </button>
    ),
  },
  {
    taskTitle: "Awaiting Developer Fix",
    action: (
      <button className="border-0 py-2 px-3 bg-success text-white bold" style={{borderRadius: 23}}>
        NEW
      </button>
    ),
  },
  {
    taskTitle: "Pending",
    action: (
      <button className="border-0 py-2 px-3 bold" style={{borderRadius: 23}}>
        DEFAULT
      </button>
    ),
  },
];

export default taskData;
