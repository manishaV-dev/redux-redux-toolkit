// STORE --- Its 5 Responsibilities
// Here we need our redux library

// These examples are just for learning purpose to understand redux so we can use modern way to manage state by using redux-toolkit

const redux = require("redux");

// 1. Create store -- createStore()--- this method is availble inside redux
const createStore = redux.createStore;

const ORDER_PIZZA = "Pizza Order";

// Action Creator --- a function that return action
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza House",
  };
}

// --------------------- Reducer
const initialState = {
  pizzaBase: 100,
  toppings: ["Cheese", "Olive"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default: {
      return state;
    }
  }
};

// 1 responsibility - Stores needs to hold application state.
const store = createStore(reducer);

// 2. It exposes a method called getState() -- getState -access to the current state
console.log("Inital State", store.getState()); // { pizzaBase: 100, toppings: [ 'Cheese', 'Olive' ] }

// 3. Register Listener via subscribe method(listener)
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
// after respon.. 4 --- log and get --- Updated state { pizzaBase: 99, toppings: [ 'Cheese', 'Olive' ] }

// 4. It allows to update state via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
/*
Updated state { pizzaBase: 99, toppings: [ 'Cheese', 'Olive' ] }
Updated state { pizzaBase: 98, toppings: [ 'Cheese', 'Olive' ] }
Updated state { pizzaBase: 97, toppings: [ 'Cheese', 'Olive' ] }
Updated state { pizzaBase: 96, toppings: [ 'Cheese', 'Olive' ] }
*/

// 5 . Handle unregistering of listener via the function returned by subscribe (listener)
unsubscribe();
store.dispatch(orderPizza());

// Log-- no further updation in state