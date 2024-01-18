// ListTask.js
import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import './Css/Task.css'
const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = tasks
    ? tasks.filter((task) => {
        if (filter === "DONE") {
          return task.isDone;
        } else if (filter === "NOT_DONE") {
          return !task.isDone;
        }
        return true;
      })
    : [];

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
