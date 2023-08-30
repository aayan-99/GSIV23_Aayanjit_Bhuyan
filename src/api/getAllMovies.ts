import { moviesStore } from "../store/MoviesStore";

export const getAllMovies = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjgwNWY2OTA4MGFkY2MyZjk4NjljNWM5YmIxZGM0YiIsInN1YiI6IjYyN2UwOWFjZmQxNDBiMDBhY2MyMTY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.krs7DCNpjnAqvCHIJ-7l4OkUB3D8RPYCyI2f0WX3hmo'
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie', options)
        .then(response => response.json())
        .then(response => moviesStore.allMovies = response)
        .catch(err => console.error(err));
};