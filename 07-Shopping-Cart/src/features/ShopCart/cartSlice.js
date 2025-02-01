import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // an array that hold final cart items
  tempItems: [], // Temporary items for updates like adjust quantity
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // if click on same item 2 or more time then only update quantity
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      //   make copy of items
      state.tempItems = [...state.items];
      //   total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    removeFromCard: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.tempItems = [...state.items];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCard } = cartSlice.actions;
