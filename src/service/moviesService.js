import { API } from "../shared/api";

export const getMovies = () => {
  return API.get(`/movies`);
};
