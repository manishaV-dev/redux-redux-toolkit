import "./App.css";
import Pizzabox from "./components/Pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <>
      <h1>React-Redux</h1>
      <Provider store={store}>
        <Pizzabox />
      </Provider>
    </>
  );
}

export default App;
