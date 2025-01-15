import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pizza_order } from "./pizzaSlice";

function PizzaComponent() {
  //   const pizzaBase = useSelector((state) => console.log(state));
  // --- console-log burger: {burgerBuns: 200}
  // pizza: {pizzaBase: 1000}

  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number os Pizza Base : {pizzaBase} </h2>
      <button onClick={() => dispatch(pizza_order())}>Order Pizza</button>
    </>
  );
}

export default PizzaComponent;
