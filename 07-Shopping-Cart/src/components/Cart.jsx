import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCard } from "../features/ShopCart/cartSlice";

const Cart = () => {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);

  // console.log(items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCard(id));
  };

  return (
    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Cart</h2>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <div>
                      <input type="number" min="1" />
                      <button>Update</button>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="cart-total">
                <p>Total: ${totalPrice}</p>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              There's nothing in your bag 😥, Let's add some items
            </div>
          )}

          <button className="back-button" onClick={() => navigate("/")}>
            Back to shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
