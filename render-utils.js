export function renderMovies(movies) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = movies.movie;

    const p = document.createElement('p');
    p.textContent = `${movies.movie} features ${movies.first} ${movies.last}`;

    div.append(h2, p);
    return div;
}

export function renderPlants(plants) {
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = plants.name;

    const h2 = document.createElement('h2');
    h2.textContent = plants.scientific_name;

    const p = document.createElement('p');
    p.textContent = plants.family;

    div.append(h1, h2, p);
    return div;
}

export function renderEmployees(employees) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = employees.email;

    const p = document.createElement('p');
    p.textContent = employees.first_name;

    div.append(h2, p);
    return div;
}
