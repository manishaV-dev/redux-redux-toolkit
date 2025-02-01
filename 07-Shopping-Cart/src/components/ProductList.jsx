import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProdcucts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const data = await response.json();
        setProdcucts(data);
      } catch (error) {
        console.log("Error Fethcing Data", error);
      }
    };
    fetchProducts();
  }, []);
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
              <p>Price: ${product.price}</p>
              <button>Add to card</button>
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
