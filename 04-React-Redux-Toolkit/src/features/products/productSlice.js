import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const fetchProdcuts = createAsyncThunk("product/fetchProdcuts", async () => {
  const res = await axios
        .get("https://fakestoreapi.com/products");
    return res.data.map((productData) => productData.title);
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

export default productSlice.reducer;
