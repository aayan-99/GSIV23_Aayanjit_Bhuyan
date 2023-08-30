import { moviesStore } from "../store/MoviesStore";

export const searchMovies = (searchParam: string) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjgwNWY2OTA4MGFkY2MyZjk4NjljNWM5YmIxZGM0YiIsInN1YiI6IjYyN2UwOWFjZmQxNDBiMDBhY2MyMTY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.krs7DCNpjnAqvCHIJ-7l4OkUB3D8RPYCyI2f0WX3hmo'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParam}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => moviesStore.searchResults = response)
        .catch(err => console.error(err));
};