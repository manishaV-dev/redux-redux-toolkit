import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./redux";

function HooksPizza() {
  const pizzaBase = useSelector((state) => state.pizzaBase);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h2 className="text">
          Number of Pizza Base available -{" "}
          <span className="number">{pizzaBase}</span>{" "}
        </h2>
        <button className="btn" onClick={() => dispatch(orderPizza())}>
          Order Pizza
        </button>
      </div>
    </>
  );
}

export default HooksPizza;
