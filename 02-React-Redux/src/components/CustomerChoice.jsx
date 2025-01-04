import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux";

function CustomerChoice() {
  const [number, setNumber] = useState(1);

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

        <input
          type="text"
          className="input-field"
          placeholder="Enter your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button className="btn" onClick={() => dispatch(orderBurger(number))}>
          Order Burger
        </button>
      </div>
    </>
  );
}

export default CustomerChoice;
