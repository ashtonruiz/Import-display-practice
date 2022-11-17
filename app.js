/* Imports */
import { renderMovies } from './render-utils.js';
import { fetchMovies } from './fetch-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movie-list');

/* Events */
window.addEventListener('load', async () => {
    const movies = await fetchMovies();
    for (let movie of movies) {
        const movieEl = renderMovies(movie);
        moviesContainer.append(movieEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
