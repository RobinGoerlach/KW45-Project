
# CineChronicles 

CineChronicles is a movie diary web application that allows users to explore popular movies, search for specific titles, and maintain a journal of their favorite movies with personalized notes. Using the TMDB API, CineChronicles fetches movie data, which users can store in a local favorites list and annotate with notes.

## Features
- **Homepage**: Browse popular movies from TMDB and search for specific titles.
- **Favorites List**: Add movies to a favorites list stored in localStorage.
- **Journal**: Add personal notes to each favorite movie.
- **Navigation**: Easy navigation between the homepage and the journal page.
- **Styling**: Clean and responsive layout styled with TailwindCSS.

## Tech Stack
- **HTML, CSS, JavaScript**: Frontend development
- **TMDB API**: Movie data source
- **LocalStorage**: Persistent data storage for favorites and notes
- **TailwindCSS**: Styling framework for a modern and responsive UI

## Project Structure
```plaintext
├── index.html                  # Homepage (Popular Movies)
├── journal.html                # Journal page (Favorite Movies & Notes)
├── assets/js/main.js           # JavaScript for homepage functionalities
├── assets/js/journal.js        # JavaScript for journal functionalities
├── README.md                   # Project overview and setup instructions
└── Developer Documentation.md  # Technical details and developer guide
```

## Setup & Installation
1. **Clone the Repository**:
   ```bash
   git clone git@github.com:RobinGoerlach/KW45-Project.git
   cd CineChronicles
   ```
2. **Install TailwindCSS** (optional if using a CDN):
   ```bash
   npm install tailwindcss
   ```
3. **Get an API Key**:
   - Sign up on [The Movie Database (TMDB)](https://www.themoviedb.org/) and get an API key.
   - Add the API key to `main.js` and `journal.js` where indicated.

4. **Open the Application**:
   - Open `index.html` in a browser to view the homepage.
   - Use the navigation to explore the journal page.

## Usage
- **Add Movies to Favorites**: Click on the "Add to Favorites" button to add a movie to the journal.
- **Add Notes**: In the journal, add personal notes to any movie in your favorites list.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
[MIT License](../LICENSE)
