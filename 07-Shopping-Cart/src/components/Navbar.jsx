import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <nav>
        <h1>Shopping Cart</h1>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>
            Cart <sup>{items.length}</sup>{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
