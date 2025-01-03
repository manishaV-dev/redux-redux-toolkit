import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux";

function BurgerBox() {
    // state.burgerBuns ==> state.burger.burgerBuns -- here global state is changed as we combined two reducers
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h2 className="text">
          Number of Burger Buns available -{" "}
          <span className="number">{burgerBuns}</span>{" "}
        </h2>
        <button className="btn" onClick={() => dispatch(orderBurger())}>
          Order Burger
        </button>
      </div>
    </>
  );
}

export default BurgerBox;
