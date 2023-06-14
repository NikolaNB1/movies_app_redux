import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppMovies from "./components/AppMovies";

function App() {
  return (
    <Routes>
      <Route index path="/movies" element={<AppMovies />}></Route>
    </Routes>
  );
}

export default App;
