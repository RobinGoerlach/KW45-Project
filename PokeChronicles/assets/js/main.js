const pokemonList = document.getElementById("pokemon-list");
const searchInput = document.getElementById("search");

// Fetch and display a list of Pokémon
async function fetchPokemons() {
  try {
    for (let i = 1; i <= 10; i++) {
      // Fetch the first 10 Pokémon as an example
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      displayPokemon(data);
    }
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}

// Display each Pokémon's details
function displayPokemon(pokemon) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.className =
    "bg-white p-4 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1";
  pokemonDiv.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-24 h-24 mx-auto">
    <h3 class="text-xl font-semibold mt-2">${pokemon.name}</h3>
    <button onclick="addToFavorites('${pokemon.name}')" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Favorites</button>
  `;
  pokemonList.appendChild(pokemonDiv);
}

// Add Pokémon to favorites in localStorage
function addToFavorites(pokemonName) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(pokemonName)) {
    favorites.push(pokemonName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${pokemonName} added to favorites!`);
  } else {
    alert(`${pokemonName} is already in favorites.`);
  }
}

// Search for a Pokémon by name or ID
async function searchPokemon() {
  const query = searchInput.value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!response.ok) throw new Error("Pokemon not found");
    const data = await response.json();
    pokemonList.innerHTML = ""; // Clear the list
    displayPokemon(data); // Display the searched Pokémon
  } catch (error) {
    alert(error.message);
  }
}

// Initialize the homepage
fetchPokemons();
