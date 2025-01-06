import React, { useEffect } from "react";
import { fetchProducts } from "./redux";
import { useSelector, useDispatch } from "react-redux";

function ProductContainer() {
  // this product should be same as the key as we define in root reducer- product key has all the access of productReducers
  const productData = useSelector((state) => state.product); // only use product as in initialstate we have 3 property so to access all of them use only key name which is given in root reducer for that particular reducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {productData.loading && <p>Loading...</p>}
      {productData.error && <p>Something went wrong{productData.error}</p>}
      {productData.products && (
        <div>
          {productData.products.map((title, index) => (
            <h4 key={index}>
              {index + 1} - {title}
            </h4>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductContainer;

// import React, { useEffect } from "react";
// import { fetchProducts } from "./redux";
// import { connect } from "react-redux";

// function ProductContainer({ productData, fetchProducts }) {
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {productData.loading && <p>Loading...</p>}
//       {productData.error && <p>Something went wrong{productData.error}</p>}
//       {productData.products && (
//         <div>
//           {productData.products.map((title, index) => (
//             <h4 key={index}>{index + 1} - {title}</h4>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     productData: state.product, // rootReducer -- same key name
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
