import { makeObservable, observable } from "mobx";
import { GetAllMoviesResponse, SingleMovieDetailsResponse } from "../types/movieDataTypes";

export class MoviesStore {
  allMovies: GetAllMoviesResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

  popularMovies: GetAllMoviesResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

  topRatedMovies: GetAllMoviesResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

  latestMovies: GetAllMoviesResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

  singleMovieDetails: SingleMovieDetailsResponse = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: '',
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  }

  searchResults: GetAllMoviesResponse = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  }

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