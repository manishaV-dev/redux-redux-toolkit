import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducer";
import burgerReducer from "./burger/BurgerReducers";
import productReducer from "./product/ProductReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  product: productReducer,
});

export default rootReducer;
