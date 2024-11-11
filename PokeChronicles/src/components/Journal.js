/* import React, { useEffect, useState } from "react";

function Journal({ favorites }) {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const fetchedFavorites = [];
      for (const name of favorites) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        fetchedFavorites.push(data);
      }
      setFavoritePokemons(fetchedFavorites);
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites Journal</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoritePokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-24 h-24 mx-auto"
            />
            <h3 className="text-xl font-semibold mt-2">{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal; */

import React, { useEffect, useState } from "react";

function Journal() {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    // Lade die Favoriten aus localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Pokémon-Daten für jede Favorit laden
    const fetchFavorites = async () => {
      const fetchedFavorites = [];
      for (const name of favorites) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        fetchedFavorites.push(data);
      }
      setFavoritePokemons(fetchedFavorites);
    };

    fetchFavorites();
  }, []); // Nur einmal laden, wenn die Komponente gemountet wird

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites Journal</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoritePokemons.length > 0 ? (
          favoritePokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-2">{pokemon.name}</h3>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No favorite Pokémon added yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Journal;
