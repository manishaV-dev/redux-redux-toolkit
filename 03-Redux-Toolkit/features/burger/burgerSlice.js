const { pizzaActions } = require("../pizza/pizzSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(pizzaActions.pizza_order, (state) => {
      state.burgerBuns--;
    });
  },
});

module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
