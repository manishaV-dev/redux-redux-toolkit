const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const fetchProdcuts = createAsyncThunk("product/fetchProdcuts", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data.map((productData) => productData.title));
});

const productSlice = createSlice({
  name: "product",
  initialState,
  // here we need a async reducer fun to fetch data from api so we use asynThunk here
  extraReducers: (builder) => {
    builder.addCase(fetchProdcuts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProdcuts.fulfilled, (state, action) => {
      (state.loading = false), (state.products = action.payload);
    });
    builder.addCase(fetchProdcuts.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

// console.log(productSlice);
module.exports = productSlice.reducer;
module.exports.fetchProdcuts = fetchProdcuts;
