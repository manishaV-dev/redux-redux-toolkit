import { createSlice } from "@reduxjs/toolkit";
import { pizza_order as pizzaOrdered } from "../pizza/pizzaSlice";

const initialState = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
  },
  //   here we want that when someone order a pizza we give them a burger
  extraReducers: (builder) => {
    builder.addCase(pizzaOrdered, (state) => {
      state.burgerBuns--;
    });
  },
});

export default burgerSlice.reducer;
export const { burger_order } = burgerSlice.actions;
