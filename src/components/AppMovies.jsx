import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesValue } from "../store/movies/selectors";
import { getMovies } from "../service/moviesService";
import { setMovies } from "../store/movies/slice";
import MovieRow from "./MovieRow";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesValue);

  useEffect(() => {
    getMovies().then(({ data }) => dispatch(setMovies(data.data)));
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array.isArray(movies)
          ? movies.map((movie, id) => (
              <MovieRow key={id} movie={movie} id={id} />
            ))
          : null}
      </div>
    </div>
  );
};
export default AppMovies;
