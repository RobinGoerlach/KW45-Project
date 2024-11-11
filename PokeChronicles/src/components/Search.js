import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query.toLowerCase());
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search Pokémon by name or ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-green-600 text-white rounded-r-md hover:bg-green-700"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
