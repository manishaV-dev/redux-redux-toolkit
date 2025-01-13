const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const fetchProdcuts = createAsyncThunk()

const productSlice = createSlice({
  name: "product",
  initialState,
  // here we need a async reducer fun to fetch data from api so we use asynThunk here
});
