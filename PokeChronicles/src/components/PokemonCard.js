import React from "react";

function PokemonCard({ pokemon, addFavorite }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-xl font-semibold mt-2">{pokemon.name}</h3>
      <button
        onClick={() => addFavorite(pokemon)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default PokemonCard;
