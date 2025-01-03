import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducer";
import burgerReducer from "./burger/BurgerReducers";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

export default rootReducer;
