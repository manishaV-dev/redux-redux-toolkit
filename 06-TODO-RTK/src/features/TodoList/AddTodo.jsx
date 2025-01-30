import React, { useState } from "react";

const AddTodo = () => {
  const [task, setTask] = useState("");

  return (
    <>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
        <button>Delete All</button>
      </div>
    </>
  );
};

export default AddTodo;
