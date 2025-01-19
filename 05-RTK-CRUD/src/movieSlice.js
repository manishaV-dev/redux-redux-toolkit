import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      name: "Intersteller",
    },
    {
      id: 2,
      name: "Harry Potter",
    },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newId =
        state.movies.length > 0
          ? state.movies[state.movies.length - 1].id + 1
          : 1;
      const newMovie = {
        id: newId,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;

/*
Explanation of addMovie action:

1. Check for Empty Array: Use a ternary operator to check if the array is empty. If it is, start id from 1.

2. Access the id Field: Properly retrieve the id from the last movie object in the array.



*/
