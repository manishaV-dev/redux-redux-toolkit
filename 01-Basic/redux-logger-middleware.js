const redux = require("redux");
const reduxLogger = require("redux-logger");

// create logger
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;

// for using middleware e.g -logger need to use applyMiddleware from redux
const applyMiddleware = redux.applyMiddleware;

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

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Inital State", store.getState());

// remove console log and use {} so logger will work here
const unsubscribe = store.subscribe(() => {});

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
unsubscribe();

/*
Inital State { pizza: { pizzaBase: 100 }, burger: { burgerBuns: 200 } }
 action ORDER_PIZZA @ 17:51:32.766
   prev state { pizza: { pizzaBase: 100 }, burger: { burgerBuns: 200 } }
   action     { type: 'ORDER_PIZZA', shop_name: 'Pizza House' }
   next state { pizza: { pizzaBase: 99 }, burger: { burgerBuns: 200 } } 


*/
