const favoritesList = document.getElementById('favorites-list');

// Retrieve and display favorite Pokémon from localStorage
async function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  for (const name of favorites) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    displayFavoritePokemon(data);
  }
}

// Display each favorite Pokémon with an option to add notes
function displayFavoritePokemon(pokemon) {
  const pokemonDiv = document.createElement('div');
  const note = localStorage.getItem(`note-${pokemon.name}`) || '';
  pokemonDiv.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
    <textarea placeholder="Add a note">${note}</textarea>
    <button onclick="saveNote('${pokemon.name}', this.previousElementSibling.value)">Save Note</button>
  `;
  favoritesList.appendChild(pokemonDiv);
}

// Save note to localStorage
function saveNote(pokemonName, note) {
  localStorage.setItem(`note-${pokemonName}`, note);
  alert(`Note for ${pokemonName} saved!`);
}

// Initialize the journal page
loadFavorites();

