// Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./JS/actions/Actions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
