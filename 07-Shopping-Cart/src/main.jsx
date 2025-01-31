import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
