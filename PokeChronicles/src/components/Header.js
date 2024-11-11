/*
import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">PokeChronicles</h1>
        <a href="/" className="text-white font-semibold hover:underline">
          Home
        </a>
      </div>
    </header>
  );
}

export default Header;
*/

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">PokeChronicles</h1>
        <Link to="/" className="text-white font-semibold hover:underline">
          Home
        </Link>
        <Link
          to="/journal"
          className="text-white font-semibold hover:underline"
        >
          Journal
        </Link>
      </div>
    </header>
  );
}

export default Header;
