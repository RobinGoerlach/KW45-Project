# PokeChronicles Developer Documentation

## Project Overview

PokeChronicles is a Pokémon-themed web app designed to let users search for Pokémon, save favorites, and manage a journal of notes. The app fetches data from the Pokémon API and saves user data in localStorage. It is built with React and styled with TailwindCSS.

## API Usage

### Pokémon API

- Endpoint: https://pokeapi.co/api/v2/pokemon/
- Data Retrieved:
  - Pokémon name
  - Image (front sprite)
  - Basic stats

### Example API Call

To fetch data for a specific Pokémon by ID or name:

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/{id_or_name}")
  .then((response) => response.json())
  .then((data) => {
    // Process data
  })
  .catch((error) => console.error("Error fetching data:", error));
```

## Code Structure

### Components

- App.js: Main entry point of the application, containing routes and overall layout.
- Header.js: Displays the navigation links for Home and Journal.
- PokemonList.js: Fetches and displays a list of Pokémon on the homepage.
- PokemonCard.js: A reusable card component that displays individual Pokémon data.
- Search.js: Search bar component to find Pokémon by name or ID.
- Journal.js: Displays the user’s favorite Pokémon and any notes saved for each.

### Local Storage Management

- Adding Favorites: Pokémon names are added to a favorites array in localStorage:

```javascript
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
favorites.push(pokemonName);
localStorage.setItem("favorites", JSON.stringify(favorites));
```

- Saving Notes: Each note is saved with a unique key in localStorage:

```javascript
localStorage.setItem(`note-${pokemonName}`, noteContent);
```

### CSS

The app uses TailwindCSS for styling, imported in index.css with the following setup:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure that TailwindCSS is correctly installed and configured in tailwind.config.js with content paths pointing to the src folder.

## Future Improvements

- Enhanced Search: Display search suggestions as the user types.
- Improved Styling: Add custom styles with more TailwindCSS utilities.
- Error Handling: Add user-friendly error messages, especially for API errors.

## Project Guidelines

- Standards: Use ES6+ syntax and follow best practices for code readability and modularity.
- Pull Requests: All changes should go through pull requests with clear commit messages.
- Repository: Keep the repository public and well-documented, with frequent commits for each change.

## Known Issues

- Search Limitation: The Pokémon API does not support fuzzy search; users must enter an exact name or ID.
