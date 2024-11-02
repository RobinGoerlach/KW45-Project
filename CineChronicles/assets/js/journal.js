// journal.js (linked to journal.html)

// Fetch and display favorite movies
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    favorites.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card', 'border', 'p-4', 'm-4', 'rounded-lg', 'shadow-lg');
        
        movieCard.innerHTML = `
            <img src="${IMAGE_BASE_URL + movie.posterPath}" alt="${movie.title}" class="w-full h-72 object-cover rounded-md">
            <h3 class="text-xl mt-4 font-semibold">${movie.title}</h3>
            <p>Notes:</p>
            <textarea id="note-${movie.id}" class="w-full h-24 border rounded p-2">${movie.notes}</textarea>
            <button class="save-note-btn mt-2 bg-green-500 text-white px-4 py-2 rounded" onclick="saveNote(${movie.id})">Save Note</button>
        `;

        favoritesContainer.appendChild(movieCard);
    });
}

// Save note to localStorage
function saveNote(movieId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieIndex = favorites.findIndex(movie => movie.id === movieId);
    const noteTextarea = document.getElementById(`note-${movieId}`);

    if (movieIndex !== -1 && noteTextarea) {
        favorites[movieIndex].notes = noteTextarea.value;
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Note saved!');
    }
}

// Initialize journal page
displayFavorites();

