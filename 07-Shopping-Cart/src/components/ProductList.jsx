import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProdcuts } from "../features/ShopCart/productSlice";
import { addToCart } from "../features/ShopCart/cartSlice";

const ProductList = () => {
  // const [products, setProdcucts] = useState([]);

  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProdcuts());
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed")
    return <p>Failed to load products,please try again</p>;

  return (
    <>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>
                {product.title.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              {/* <button onClick={() => dispatch(addToCart(product.id))}>Add to card</button> */}
              <button onClick={() => dispatch(addToCart(product))}>Add to card</button>
            </div>
          ))
        ) : (
          <p>No Product Found..</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
