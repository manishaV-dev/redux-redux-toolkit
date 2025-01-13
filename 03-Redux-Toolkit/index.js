const store = require("./app/store");
const pizzaActions = require("./features/pizza/pizzSlice").pizzaActions;
const {burgerActions} = require("./features/burger/burgerSlice");

console.log("Initial State", store.getState()); // Initial State { pizza: { pizzaBase: 1000 } }

const unsubscribe = store.subscribe(() => {
//   console.log("Update state", store.getState());
// to see logger middleware
});

store.dispatch(pizzaActions.pizza_order());
store.dispatch(pizzaActions.pizza_order());
store.dispatch(burgerActions.burger_order());
store.dispatch(burgerActions.burger_order());
unsubscribe();

// Initial State { pizza: { pizzaBase: 1000 }, burger: { burgerBuns: 200 } }
// Update state { pizza: { pizzaBase: 999 }, burger: { burgerBuns: 200 } }
// Update state { pizza: { pizzaBase: 998 }, burger: { burgerBuns: 200 } }
// Update state { pizza: { pizzaBase: 998 }, burger: { burgerBuns: 199 } }
// Update state { pizza: { pizzaBase: 998 }, burger: { burgerBuns: 198 } }



// Initial State { pizza: { pizzaBase: 1000 }, burger: { burgerBuns: 200 } }
//  action pizza/pizza_order @ 12:28:35.091
//  prev state { pizza: { pizzaBase: 1000 }, burger: { burgerBuns: 200 } }
//  action     { type: 'pizza/pizza_order', payload: undefined }
//  next state { pizza: { pizzaBase: 999 }, burger: { burgerBuns: 200 } }