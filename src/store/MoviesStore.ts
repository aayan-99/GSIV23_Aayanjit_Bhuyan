import { makeObservable, observable } from "mobx";
import { GetAllMoviesResponse, SingleMovieDetailsResponse } from "../types/movieDataTypes";

export class MoviesStore {
  allMovies: GetAllMoviesResponse

  popularMovies: GetAllMoviesResponse

  topRatedMovies: GetAllMoviesResponse

  latestMovies: GetAllMoviesResponse

  singleMovieDetails: SingleMovieDetailsResponse

  searchResults: GetAllMoviesResponse

  constructor() {
    makeObservable(this, {
      allMovies: observable,
      topRatedMovies: observable,
      singleMovieDetails: observable,
      searchResults: observable,
      popularMovies: observable,
      latestMovies: observable,
    })
  }
}

export const moviesStore = new MoviesStore();