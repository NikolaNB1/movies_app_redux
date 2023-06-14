import { useEffect, useState } from "react";
import { getMovies } from "../service/moviesService";
import { useDispatch } from "react-redux";
import { setMovies } from "../store/movies/slice";

const MovieSearch = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies({ title: searchTitle }).then(({ data }) =>
      dispatch(setMovies(data.data))
    );
  }, [searchTitle]);

  return (
    <>
      <div className="form-inline">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
    </>
  );
};
export default MovieSearch;
