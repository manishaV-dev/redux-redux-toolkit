import { useDispatch, useSelector } from "react-redux";
import { burger_order } from "./burgerSlice";

function BurgerView() {
  const burgerBuns = useSelector((state) => state.burger.burgerBuns);
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number os Burger Buns : {burgerBuns} </h2>
      <button onClick={() => dispatch(burger_order())}>Order Burger</button>
    </>
  );
}

export default BurgerView;
