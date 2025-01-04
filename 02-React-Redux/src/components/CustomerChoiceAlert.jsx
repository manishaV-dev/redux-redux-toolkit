import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBurger } from "./redux";

function CustomerChoiceAlert() {
  const [number, setNumber] = useState(1);

  // state.burgerBuns ==> state.burger.burgerBuns -- here global state is changed as we combined two reducers
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch();

  const handleOrder = () => {
    const burgerCount = parseInt(number, 10);

    //  Check if there are enough burger buns
    if (burgerBuns < burgerCount || burgerBuns <= 0) {
      alert(
        `Not enough burger buns available. Please enter a number less than or equal to ${burgerBuns}.`
      );
      return;
    }

    // Dispatch the order action if the condition is met
    dispatch(orderBurger(burgerCount));
    setNumber(1); // Reset input after a successful order
  };

  return (
    <>
      <div className="container">
        <h2 className="text">
          Number of Burger Buns available -{" "}
          <span className="number">{burgerBuns}</span>{" "}
        </h2>

        <input
          type="number"
          className="input-field"
          placeholder="Enter your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button className="btn" onClick={handleOrder}>
          Order Burger
        </button>
      </div>
    </>
  );
}

export default CustomerChoiceAlert;
