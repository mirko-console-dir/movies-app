import MovieItem from "./MovieItem";
/* le props vengono passate come un oggetto e possiamo destrutturare */
/* return quando usiamo un componente di tipo classe */
const MovieList = ({ movies, onSelectedMovie }) => {
  return (
    <div className=" d-flex justify-content-center flex-wrap">
      {/* NEI CICLI RICORDARSI DI METTERE LA KEY PER FAR CAPIRE A REACT COSA CAMBIA */}

      {movies.map((movie) => (
        <MovieItem
          onSelectedMovie={onSelectedMovie}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
};
export default MovieList;
