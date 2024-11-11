const favoritesList = document.getElementById("favorites-list");

// Retrieve and display favorite Pokémon from localStorage
async function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  for (const name of favorites) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    displayFavoritePokemon(data);
  }
}

// Display each favorite Pokémon with an option to add notes
function displayFavoritePokemon(pokemon) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.className =
    "bg-white p-4 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1";

  const note = localStorage.getItem(`note-${pokemon.name}`) || "";
  pokemonDiv.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-24 h-24 mx-auto">
    <h3 class="text-xl font-semibold mt-2">${pokemon.name}</h3>
    <textarea class="mt-2 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      placeholder="Add a note">${note}</textarea>
    <button onclick="saveNote('${pokemon.name}', this.previousElementSibling.value)" 
      class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Note</button>
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
