import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pizza_order, customer_choice } from "./pizzaSlice";

function PizzaComponent() {
  //   const pizzaBase = useSelector((state) => console.log(state));
  // --- console-log burger: {burgerBuns: 200}
  // pizza: {pizzaBase: 1000}

  const [number, setNumber] = useState(1);

  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number os Pizza Base : {pizzaBase} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />{' '}
      <button onClick={() => dispatch(pizza_order())}>Order Pizza</button>{" "}
      <button onClick={() => dispatch(customer_choice(number))}>
        Order Pizza (Customer Choice)
      </button>
    </>
  );
}

export default PizzaComponent;
