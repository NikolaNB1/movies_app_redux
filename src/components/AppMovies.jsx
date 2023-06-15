import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectLastPage,
  selectMoviesValue,
  selectSearchDuration,
  selectSearchTitle,
  selectSelectedCount,
} from "../store/movies/selectors";
import { getMovies } from "../service/moviesService";
import {
  addToSelected,
  resetSelected,
  setLastPage,
  setMovies,
  setPage,
} from "../store/movies/slice";
import MovieRow from "./MovieRow";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesValue);
  const searchTitle = useSelector(selectSearchTitle);
  const selectedMovies = useSelector(selectSelectedCount);
  const searchDuration = useSelector(selectSearchDuration);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);

  useEffect(() => {
    getMovies({ page: currentPage, title: searchTitle }).then(({ data }) => {
      dispatch(setMovies(data.data));
      dispatch(setLastPage(data.last_page));
    });
  }, [searchTitle, currentPage]);

  const handleSelectAll = () => {
    dispatch(resetSelected());
    movies.forEach((movie) => {
      dispatch(addToSelected(movie.id));
    });
  };

  const handleDeselectAll = () => {
    dispatch(resetSelected());
  };

  const handleClickSort = (sort_by, sort_order) => {
    getMovies({
      title: searchTitle,
      duration: searchDuration,
      sort_by,
      sort_order,
    }).then(({ data }) => {
      dispatch(setMovies(data.data));
      dispatch(setLastPage(data.last_page));
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const goToNextPage = () => {
    if (currentPage < lastPage) {
      dispatch(setPage(currentPage + 1));
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                disabled={currentPage === 1}
                onClick={goToPreviousPage}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">Page {currentPage}</span>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                disabled={currentPage === lastPage}
                onClick={goToNextPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
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
      <div>
        <div className="container d-flex justify-content-center">
          <button
            className="btn btn-outline-success"
            onClick={() => handleClickSort("title", "asc")}
          >
            Title Asc
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleClickSort("title", "desc")}
          >
            Title Desc
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => handleClickSort("duration", "asc")}
          >
            Duration Asc
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleClickSort("duration", "desc")}
          >
            Duration Desc
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie, id) => <MovieRow key={id} movie={movie} id={id} />)
        ) : (
          <p className="container mt-5">
            Nema dostupnih filmova po zadatom kriterijumu.
          </p>
        )}
      </div>
    </div>
  );
};
export default AppMovies;
