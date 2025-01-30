import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodo } from "./todoSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      // means if we add empty task then empty obj should not be added
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={() => dispatch(deleteAllTodo())}>Delete All</button>
      </div>
    </>
  );
};

export default AddTodo;
