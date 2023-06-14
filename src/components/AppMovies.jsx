import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesValue } from "../store/movies/selectors";
import { getMovies } from "../service/moviesService";
import { setMovies } from "../store/movies/slice";

const AppMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesValue);

  useEffect(() => {
    getMovies().then(({ data }) => dispatch(setMovies(data)));
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array.isArray(movies)
          ? movies.map((movie, id) => (
              <div key={id} className="col m-5" style={{ width: "340px" }}>
                <div className="card shadow-sm">
                  <div className="card-body bg-light border rounded border">
                    <img
                      src={movie.imageUrl}
                      className="card-img-top"
                      alt={`${movie.title}`}
                      width="100"
                      height="300"
                    />
                    <h3 className="card-text">{movie.title}</h3>
                    <div className="mb-1 text-body-secondary">
                      Director: {movie.director}
                    </div>
                    <p className="card-text mb-auto">
                      Release date: {movie.releaseDate}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {/* <Link
                        className="btn btn-outline-success"
                        to={`/movies/${movie.id}`}
                      >
                        View
                      </Link> */}
                      {/* <Link
                        className="btn btn-outline-warning"
                        to={`edit/${movie.id}`}
                      >
                        Edit
                      </Link> */}
                      {/* <button
                        className="btn btn-outline-danger"
                        type="delete"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default AppMovies;
