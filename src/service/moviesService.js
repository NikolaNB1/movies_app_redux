import { API } from "../shared/api";

export const getMovies = (params) => {
  return API.get("/movies", { params });
};
