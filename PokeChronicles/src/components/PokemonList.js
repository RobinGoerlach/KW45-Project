import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ addFavorite }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const fetchedPokemons = [];
      for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        fetchedPokemons.push(data);
      }
      setPokemons(fetchedPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          addFavorite={addFavorite}
        />
      ))}
    </div>
  );
}

export default PokemonList;
