const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  burgerBuns: 200,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    burger_order: (state) => {
      state.burgerBuns--;
    },
  },
});

module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;
