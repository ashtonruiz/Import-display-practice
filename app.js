/* Imports */
import { renderMovies, renderPlants, renderEmployees } from './render-utils.js';
import { fetchMovies, fetchPlants, fetchEmployees } from './fetch-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movie-list');
const plantsContainer = document.getElementById('plants-list');
const employeesContainer = document.getElementById('employees-list');
const carsContainer = document.getElementById('cars-list');

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

window.addEventListener('load', async () => {
    const employees = await fetchEmployees();
    for (let employee of employees) {
        const employeesEl = renderEmployees(employee);
        employeesContainer.append(employeesEl);
    }
});

/* Display Functions */

// window.addEventListener('load', async () => {

// (don't forget to call any display functions you want to run on page load!)
