
# Developer Documentation: CineChronicles

This documentation provides technical details for developers working on CineChronicles. It covers API integration, JavaScript functionality, file structure, and guidelines for future development.

## Overview
CineChronicles is a client-side web application, meaning all data is stored in `localStorage`. The TMDB API is used for fetching movie information, which is displayed as cards on the homepage. Users can add movies to a favorites list and annotate them with notes on a separate journal page.

## File Structure
- **index.html**: Homepage that displays popular movies and allows users to search.
- **journal.html**: Journal page that displays a list of favorite movies, along with a text area for notes.
- **main.js**: Handles movie fetching, displaying, and adding favorites on the homepage.
- **journal.js**: Retrieves favorite movies from `localStorage` and manages note-saving functionality.

## Technical Details

### API Integration (TMDB)
- **API Base URL**: `https://api.themoviedb.org/3`
- **Endpoints**:
  - **Popular Movies**: `/movie/popular`
  - **Search**: `/search/movie`

- **API Key**: To use the TMDB API, sign up and add the key in `main.js` and `journal.js` as a constant:
  ```javascript
  const API_KEY = 'YOUR_TMDB_API_KEY';
  ```

### JavaScript Functions

#### main.js (Homepage)
- **fetchPopularMovies**: Fetches a list of popular movies.
- **displayMovies**: Renders movie data as cards in the `#movies-container`.
- **addToFavorites**: Saves selected movies to `localStorage` using an array of objects.

#### journal.js (Journal Page)
- **displayFavorites**: Retrieves and displays movies saved in `localStorage`.
- **saveNote**: Updates a specific movie object in `localStorage` to save personal notes.

### Styling with TailwindCSS
- We are using TailwindCSS for styling. It offers utility-first classes for rapid development and responsive layouts.
- **Common Classes**:
  - `.grid`, `.flex` for layout
  - `.rounded-lg`, `.shadow-lg` for card styling
  - `.bg-blue-500`, `.text-white` for button styling

## Development & Collaboration Guidelines
- Use **Pull Requests** for all updates to the `main` branch.
- Keep functions modular and avoid repetitive code.
- Use meaningful variable names and add comments where necessary.

## Future Enhancements
1. **Improved Search**: Implement pagination or infinite scrolling.
2. **User Authentication**: Allow users to save their journal across devices.
3. **Custom Themes**: Allow users to switch between light and dark mode.

---

This guide should provide everything needed to develop and extend CineChronicles.
