import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMoviesValue,
  selectSearchTitle,
  selectSelectedCount,
} from "../store/movies/selectors";
import { getMovies } from "../service/moviesService";
import {
  addToSelected,
  removeFromSelected,
  resetSelected,
  setMovies,
} from "../store/movies/slice";
import MovieRow from "./MovieRow";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesValue);
  const searchTitle = useSelector(selectSearchTitle);
  const selectedMovies = useSelector(selectSelectedCount);

  useEffect(() => {
    getMovies({ title: searchTitle }).then(({ data }) =>
      dispatch(setMovies(data.data))
    );
  }, [searchTitle]);

  const handleSelectAll = () => {
    dispatch(resetSelected());
    movies.forEach((movie) => {
      dispatch(addToSelected(movie.id));
    });
  };

  const handleDeselectAll = () => {
    dispatch(resetSelected());
  };

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <h4>Selected movies: {selectedMovies}</h4>
        <div>
          <button className="btn btn-info" onClick={handleSelectAll}>
            Select All
          </button>
          <button className="btn btn-secondary" onClick={handleDeselectAll}>
            Deselect All
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie, id) => <MovieRow key={id} movie={movie} id={id} />)
        ) : (
          <p className="container">
            Nema dostupnih filmova po zadatom kriterijumu.
          </p>
        )}
      </div>
    </div>
  );
};
export default AppMovies;
