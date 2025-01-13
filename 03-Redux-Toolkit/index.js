const store = require("./app/store");
const pizzaActions = require("./features/pizza/pizzSlice").pizzaActions;
const {burgerActions} = require("./features/burger/burgerSlice");

console.log("Initial State", store.getState()); // Initial State { pizza: { pizzaBase: 1000 } }

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

store.dispatch(pizzaActions.pizza_order());
store.dispatch(pizzaActions.pizza_order());
store.dispatch(burgerActions.burger_order());
store.dispatch(burgerActions.burger_order());
unsubscribe();

// Initial State { pizza: { pizzaBase: 1000 } }
// Update state { pizza: { pizzaBase: 999 } }
