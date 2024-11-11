/* import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to PokeChronicles!</h1>
    </div>
  );
}

export default App;


import React, { useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addFavorite = (pokemon) => {
    if (!favorites.includes(pokemon.name)) {
      const updatedFavorites = [...favorites, pokemon.name];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-6">
        <Search />
        <PokemonList addFavorite={addFavorite} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addFavorite = (pokemon) => {
    if (!favorites.includes(pokemon.name)) {
      const updatedFavorites = [...favorites, pokemon.name];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <PokemonList addFavorite={addFavorite} />
                </>
              }
            />
            <Route
              path="/journal"
              element={<Journal favorites={favorites} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
