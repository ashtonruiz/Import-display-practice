/* Imports */
import { renderMovies, renderPlants } from './render-utils.js';
import { fetchMovies, fetchPlants } from './fetch-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movie-list');
const plantsContainer = document.getElementById('plants-list');

/* Events */
window.addEventListener('load', async () => {
    const movies = await fetchMovies();
    for (let movie of movies) {
        const movieEl = renderMovies(movie);
        moviesContainer.append(movieEl);
    }
});

window.addEventListener('load', async () => {
    const plants = await fetchPlants();
    for (let plant of plants) {
        const plantEl = renderPlants(plant);
        plantsContainer.append(plantEl);
    }
});
/* Display Functions */

// window.addEventListener('load', async () => {

// (don't forget to call any display functions you want to run on page load!)
