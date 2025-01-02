const ORDER_PIZZA = "Pizza Order";

// Action
// const action = {
//   type: ORDER_PIZZA,
//   shop_name: "Pizza House",
// };

// Action Creator --- a function that return action
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza House",
  };
}

// --------------------- Reducer
const initialState = {
  pizzaBase: 100,
  toppings: ["Cheese", "Olive"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: pizzaBase - 1,
      };
    default: {
      return state;
    }
  }
};
