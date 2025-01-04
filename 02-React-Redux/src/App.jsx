import "./App.css";
// import Pizzabox from "./components/Pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
// import HooksPizza from "./components/HooksPizza";
// import BurgerBox from "./components/BurgerBox";
// import CustomerChoice from "./components/CustomerChoice";
import CustomerChoiceAlert from "./components/CustomerChoiceAlert";

function App() {
  return (
    <>
      <h1>React-Redux</h1>
      <Provider store={store}>
        {/* <Pizzabox /> */}

{/* -------- Example of combine two reducers */}
        {/* <HooksPizza /> */}
        {/* <BurgerBox /> */}

{/* ---------- Example of action payload, where customer choose the number of buns and decrease it */}
        {/* <CustomerChoice /> */}

{/* ---------- Example of action payload, where if input number is greater than available buns then show alert */}

        <CustomerChoiceAlert />

      </Provider>
    </>
  );
}

export default App;
