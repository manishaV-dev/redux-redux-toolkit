import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    updateTodo: (state, action) => {
      const { newId, newText } = action.payload;
      const todo = state.find((todo) => todo.id === newId);
      if (todo) {
        todo.text = newText;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodo: () => [], // return initialState
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteAllTodo, deleteTodo } =
  todoSlice.actions;
