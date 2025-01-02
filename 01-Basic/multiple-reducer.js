const redux = require("redux");
const createStore = redux.createStore;

// method for combine multiple reducers
const combineReducers = redux.combineReducers;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza House",
  };
}

function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}

const initialStateForPizza = {
  pizzaBase: 100,
};

const initialStateForBurger = {
  burgerBuns: 200,
};

const reducerForPizza = (state = initialStateForPizza, action) => {
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

const reducerForBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  pizza: reducerForPizza,
  burger: reducerForBurger,
});

const store = createStore(rootReducer);

console.log("Inital State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
unsubscribe();
