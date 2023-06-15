import { useDispatch, useSelector } from "react-redux";
import { selectSelectedList } from "../store/movies/selectors";
import { useEffect, useState } from "react";
import { addToSelected, removeFromSelected } from "../store/movies/slice";

const MovieRow = ({ movie, id }) => {
  const dispatch = useDispatch();

  const selectedMovies = useSelector(selectSelectedList);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedMovies.find((id) => id === movie.id)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedMovies, setSelected, movie]);

  const handleClick = () => {
    if (selected) {
      dispatch(removeFromSelected(movie.id));
    } else {
      dispatch(addToSelected(movie.id));
    }
  };

  return (
    <div key={id} className="col m-5" style={{ width: "380px" }}>
      <div className="card shadow-sm">
        <div className="card-body bg-light border rounded border">
          <img
            src={movie.image_url}
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
            Release date: {movie.release_date}
          </p>
          <p className="card-text mb-auto">Duration: {movie.duration}</p>
          <div className="mb-1 text-body-secondary">Genre: {movie.genre}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          ></div>
        </div>
        {selected ? (
          <button className="btn btn-secondary" onClick={handleClick}>
            Deselect
          </button>
        ) : (
          <button className="btn btn-info" onClick={handleClick}>
            Select
          </button>
        )}
      </div>
    </div>
  );
};
export default MovieRow;
