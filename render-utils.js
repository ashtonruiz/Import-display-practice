export function renderMovies(movies) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = movies.movie;

    const p = document.createElement('p');
    p.textContent = `${movies.name} features ${movies.first} ${movies.last}`;

    div.append(h2, p);
    return div;
}
