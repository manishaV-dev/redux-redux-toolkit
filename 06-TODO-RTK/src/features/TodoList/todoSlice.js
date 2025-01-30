import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    deleteAllTodo: () => {},
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteAllTodo, deleteTodo } =
  todoSlice.actions;
