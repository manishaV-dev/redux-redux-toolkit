import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

// ACtion creator for thunk

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchError(errorMsg));
      });
  };
};
