import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppMovies from "./components/AppMovies";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />}></Route>
        <Route path="/movies" element={<AppMovies />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
