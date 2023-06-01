export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "09935575409e86c2b520b2b1186ed5f9";
export const LANGUAGE = "en-US";
export const DEFAULT_PAGE = 1;

export const ENDPOINTS = {
  movies: {
    popularMovies: () => "/movie/popular",
    searchedMovies: () => "/search/movie",
  },
};
