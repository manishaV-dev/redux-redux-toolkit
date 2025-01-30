import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoList";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
