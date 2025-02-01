import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProdcuts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdcuts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(fetchProdcuts.fulfilled, (state, action) => {
        (state.status = "Succeeded"), (state.items = action.payload);
      })
      .addCase(fetchProdcuts.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export default productSlice.reducer;
