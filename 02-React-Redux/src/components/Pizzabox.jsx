import React from "react";
import { orderPizza } from "./redux";
import { connect } from "react-redux";

function Pizzabox(props) {
  console.log(props);

  return (
    <>
      <div className="container">
        <h2 className="text">
          Number of Pizza Base available -{" "}
          <span className="number">{props.pizzaBase}</span>{" "}
        </h2>
        <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizza.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizzabox);
