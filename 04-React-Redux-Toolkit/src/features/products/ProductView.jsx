import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdcuts } from "./productSlice";

function ProductView() {
  const product = useSelector((state) => state.product);
  //   console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdcuts());
  }, []);

  return (
    <>
      <h2>List of product title</h2>
      {product.loading && <p>Loading.....</p>}
      {!product.loading && product.error && <h2>{product.error}</h2>}
      {product.products}
    </>
  );
}

export default ProductView;
