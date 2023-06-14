import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="navbar-brand">Movies app</span>
        </Link>

        <MovieSearch />

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/movies" className="nav-link" aria-current="page">
              Movies
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/add" className="nav-link" aria-current="page">
              Add movie
            </Link>
          </li> */}
        </ul>
      </header>
    </div>
  );
};
export default Header;
