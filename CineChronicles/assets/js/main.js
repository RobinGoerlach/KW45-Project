// main.js (linked to index.html)
const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Fetch popular movies
async function fetchPopularMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Display movies on homepage
function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card', 'border', 'p-4', 'm-4', 'rounded-lg', 'shadow-lg');
        
        movieCard.innerHTML = `
            <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}" class="w-full h-72 object-cover rounded-md">
            <h3 class="text-xl mt-4 font-semibold">${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <button class="favorite-btn mt-2 bg-blue-500 text-white px-4 py-2 rounded" onclick="addToFavorites(${movie.id}, '${movie.title}', '${movie.poster_path}')">Add to Favorites</button>
        `;
        
        moviesContainer.appendChild(movieCard);
    });
}

// Add movie to favorites in localStorage
function addToFavorites(id, title, posterPath) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Avoid duplicates
    if (!favorites.some(movie => movie.id === id)) {
        favorites.push({ id, title, posterPath, notes: '' });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${title} added to favorites!`);
    } else {
        alert(`${title} is already in favorites!`);
    }
}

// Initialize homepage
fetchPopularMovies();

