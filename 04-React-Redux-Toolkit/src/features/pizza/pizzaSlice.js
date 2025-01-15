import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaBase: 1000,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--;
    },
  },
});

export default pizzaSlice.reducer;
export const { pizza_order } = pizzaSlice.actions;
