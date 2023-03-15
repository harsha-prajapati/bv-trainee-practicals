import React from "react";
import './AddTask.css'
function AddTask(props) {
  return (
    <div className="addTaskContainer container">
      <div className="row">
        <label className="">Enter task title</label>
        <input
          className=""
          type="text"
          value={props.taskTitle}
          onChange={(e) => props.onTaskTitleChange(e.target.value)}
        />
      </div>
      
      <div className="row">
        <label className="">Enter task deadline</label>
        <input
          className=""
          type="text"
          value={props.taskDeadline}
          onChange={(e) => props.onTaskDeadlineChange(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={props.addTask}>
          Create Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
