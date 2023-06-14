const MovieRow = ({ movie, id }) => {
  return (
    <div key={id} className="col m-5" style={{ width: "340px" }}>
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
  );
};
export default MovieRow;
