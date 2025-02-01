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

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.tempItems = [...state.items];
      //   total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // updateTempQuantity: (state, action) => {
    //   const tempItem = state.tempItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (tempItem) {
    //     tempItem.quantity = action.payload.quantity;  // action.payload.quantity;-- whatever value typed in input value that value assigned to tempItem.quantity
    //   }
    // },

    updateTempQuantity: (state, action) => {
      state.tempItems = state.tempItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity } // Ensure immutability
          : item
      );
    },

    applyTempUpdates: (state, action) => {
      const tempItem = state.tempItems.find(
        (item) => item.id === action.payload
      );
      const cartItem = state.items.find((item) => item.id === action.payload);
      if (tempItem && cartItem) {
        // making tempItem quantity equal to original items so if we update the quantity on tempItems it also reflect to original items
        cartItem.quantity = tempItem.quantity;
      }
      //   total price
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  updateTempQuantity,
  applyTempUpdates,
} = cartSlice.actions;
