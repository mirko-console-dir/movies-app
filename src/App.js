import "./App.css";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList.js";
import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetail";
import { fetchMovies, fetchMoviesById } from "./utils";

function App() {
  /* gestire lo stato della ricerca */
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  /* gestiamo un errore */
  const [error, setError] = useState("");

  const [errorDetail, setErrorDetail] = useState("");
  /* gestiamo un errore */

  const [selectedMovie, setSelectedMovie] = useState("");

  const selectMovie = async (movie) => {
    setSelectedMovie(movie);
    const newMovie = await fetchMoviesById(movie.imdbID);
    if (newMovie.Error) {
      setErrorDetail(newMovie.Error);
      setSelectedMovie(null);
    } else {
      setSelectedMovie(newMovie);
    }
  };

  /* facciamo la chiamata ajax con useEffect  */
  /* useEffect non può essere async dunque creiamo una funizione ad espressione per farlo con l'api */
  const callApi = async (search = "") => {
    const data = await fetchMovies(search);
    /* verifichiamo errori */
    setError(data.Error);
    if (!data.Error.length) {
      setMovies(data.movies);
      /* per avere il dettaglio almeno del primo dilm */
      setSelectedMovie(data.movies[0]);
      setTotalCount(data.totalCount);
    } else {
      setMovies([]);
      setTotalCount(0);
    }
  };

  useEffect(() => {
    /* mettendo valore nella funz mettiamo un valore di default */
    callApi("Godfather");
    return () => {};
  }, []);

  return (
    <>
      <NavBar onSearchCange={callApi} />

      <div className="App container">
        <header className="App-header">
          {/* manda a searchBar le props, in questo caso onSearchChange */}
          <h1>My Favourite Movies{totalCount}</h1>
        </header>
        {/* se non c'è errore */}
        {!error ? (
          <MovieList onSelectedMovie={selectMovie} movies={movies} />
        ) : (
          <h2>{error}</h2>
        )}
        {/* variabile per dire quale film mostrare i detail */}
        <MovieDetail error={errorDetail} movie={selectedMovie} />
      </div>
    </>
  );
}

export default App;
