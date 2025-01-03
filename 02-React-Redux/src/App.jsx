import "./App.css";
// import Pizzabox from "./components/Pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksPizza from "./components/HooksPizza";

function App() {
  return (
    <>
      <h1>React-Redux</h1>
      <Provider store={store}>
        {/* <Pizzabox /> */}
        <HooksPizza />
      </Provider>
    </>
  );
}

export default App;
