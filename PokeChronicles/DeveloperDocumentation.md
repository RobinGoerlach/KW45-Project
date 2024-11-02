
# PokeChronicles Developer Documentation

## Project Overview

PokeChronicles is a Pokémon-themed web application designed for users to search for Pokémon and keep a journal of their favorites. The application uses the Pokémon API to fetch data and `localStorage` to persist favorites and notes. This project is structured for ease of expansion and customization.

## API Usage

### Pokémon API

- **Endpoint**: `https://pokeapi.co/api/v2/pokemon/`
- **Data Retrieved**:
  - Name
  - Image (front sprite)
  - Stats (basic)

### Example API Call

To fetch data for a specific Pokémon by ID or name:
```javascript
fetch('https://pokeapi.co/api/v2/pokemon/{id_or_name}')
  .then(response => response.json())
  .then(data => {
    // Process data
  })
  .catch(error => console.error("Error fetching data:", error));
```

## Code Structure

### HTML Structure

- `index.html`: Homepage where users can search for Pokémon and view a list.
- `journal.html`: Journal page to view and manage favorite Pokémon, including personal notes.

### JavaScript

- **`main.js`**: Contains all homepage logic, including:
  - Fetching Pokémon data
  - Rendering Pokémon list
  - Adding Pokémon to favorites in `localStorage`

- **`journal.js`**: Contains all journal page logic, including:
  - Loading favorites from `localStorage`
  - Rendering the list of favorites with notes
  - Adding and saving personal notes for each Pokémon

### CSS

- **`styles.css`**: This file contains TailwindCSS for styling. Ensure TailwindCSS is set up correctly by linking it in the HTML.

## Local Storage Management

The app uses `localStorage` to save the favorites list and individual notes.

### Adding Favorites

When a Pokémon is added to favorites, its name is saved to a `favorites` array in `localStorage`:
```javascript
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
favorites.push(pokemonName);
localStorage.setItem('favorites', JSON.stringify(favorites));
```

### Saving Notes

Each Pokémon’s note is stored separately in `localStorage` with a unique key:
```javascript
localStorage.setItem(`note-${pokemonName}`, noteContent);
```

## Future Improvements

1. **Search Optimization**: Enhance search by displaying suggestions as the user types.
2. **Styling Enhancements**: Customize the look and feel with more TailwindCSS utilities.
3. **Error Handling**: Add more user-friendly error messages for API errors or offline mode.

## Project Guidelines

- **Standards**: Use ES6+ syntax and follow best practices for readability and modularity.
- **Pull Requests**: Use PRs for all updates to the main branch.
- **GitHub**: Keep the repository public and clean, with frequent commits documenting each change.

## Known Issues

- **Search Limitation**: The Pokémon API does not support fuzzy search; users must enter an exact name or ID.
- **Offline Limitation**: The app requires internet connectivity to fetch Pokémon data initially.
