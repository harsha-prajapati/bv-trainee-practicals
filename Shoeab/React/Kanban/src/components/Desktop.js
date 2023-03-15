import React, { useContext } from "react";
import { TaskCountContext } from "./TaskCountContext";
import './Desktop.css'

function Desktop() {
  //Use context for setting up the task count to be displayed on the Desktop component -
  const {
    totalTasks,
    pendingTasks,
    completedTasks,
  } = useContext(TaskCountContext);
  return (
    <div className="headings">
      <h2 className="heading">KANBAN BOARD</h2>
      <h3 className="heading-1">Total tasks: {totalTasks}</h3>
      <h3 className="heading-2">Pending tasks: {pendingTasks}</h3>
      <h3 className="heading-3">Completed tasks: {completedTasks}</h3>
    </div>
  );
}

export default Desktop;
