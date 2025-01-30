import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {},
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    deleteAllTodo: () => {},
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteAllTodo, deleteTodo } =
  todoSlice.actions;
