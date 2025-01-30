import React from "react";

const TodoList = () => {
  return (
    <>
      <div className="todo-list">
        <div className="todo-item">
          <span>Pack Bag</span>
          <button>Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
