const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizzSlice");
const burgerReducer = require("../features/burger/burgerSlice");
const productReducer = require("../features/products/productSlice");
// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  // This is where we are going to specify all the reducers from the slices. that belong to specific features

  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;
