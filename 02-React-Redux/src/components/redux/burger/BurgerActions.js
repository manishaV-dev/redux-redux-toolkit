import { ORDER_BURGER } from "./BurgerTypes";

export function orderBurger(number) {
  return {
    type: ORDER_BURGER,
    payload: number
  };
}
