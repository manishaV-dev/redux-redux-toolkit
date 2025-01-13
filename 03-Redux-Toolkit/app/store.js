const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizzSlice");

const burgerReducer = require("../features/burger/burgerSlice");

const store = configureStore({
  // This is where we are going to specify all the reducers from the slices. that belong to specific features

  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
  },
});

module.exports = store;
