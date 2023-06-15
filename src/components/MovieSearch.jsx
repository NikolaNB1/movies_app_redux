import { useDispatch } from "react-redux";
import { setSearchTitle } from "../store/movies/slice";

const MovieSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTitle(event.target.value));
  };

  return (
    <>
      <div className="form-inline">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Title"
          onChange={handleSearch}
        />
      </div>
    </>
  );
};
export default MovieSearch;
