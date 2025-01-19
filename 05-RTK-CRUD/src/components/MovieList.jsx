import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  //   const movies = useSelector((state) => console.log(state)); // movies: movies: Array(2) --- state--reducerName(store)--InitialState Property Name(movieSlice)

  const movies = useSelector((state) => state.movies.movies);
  console.log(movies); // (2) [{…}, {…}]

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeMovie(id))
  }

  return (
    <>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.name}</div>
          <button onClick={() => handleDelete(movie.id)}>Remove Movie</button>
        </div>
      ))}
    </>
  );
};

export default MovieList;
