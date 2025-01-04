import { ORDER_BURGER } from "./BurgerTypes";

// give default value, so if some component have no payload like(BurgerBox) it doesnt show NaN
export function orderBurger(number = 1) {
  return {
    type: ORDER_BURGER,
    payload: number,
  };
}
