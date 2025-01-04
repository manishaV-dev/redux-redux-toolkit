import "./App.css";
// import Pizzabox from "./components/Pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
// import HooksPizza from "./components/HooksPizza";
// import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";

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
        <CustomerChoice />

      </Provider>
    </>
  );
}

export default App;
