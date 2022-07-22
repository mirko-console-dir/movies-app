/* nella documentazione i parametri in path dell'url VEDI SU ->http://www.omdbapi.com/*/
const APIKEY = process.env.REACT_APP_KEY;
const APIURL = process.env.REACT_APP_APIURL;

/* FUNZIONI di utilities*/
/* s è il parametro di ricerca nella doc dell'api */
const fetchMovies = async (search = "The godfather") => {
  /* azioniamo se scriviamo nel search e gestiamo se non trova nulla ovvero response False*/
  if (search.length < 2) {
    return;
  }
  const response = await fetch(
    APIURL + "?apikey=" + APIKEY + "&s=" + search
  ).then((res) => res.json());
  console.log(response);
  /* prendiamo i valori di response destrutturando l'oggetto */
  const { Error, Search: movies, totalResults: totalCount } = response;
  /* se c'è error uguale a error altrimenti vuoto */
  return { movies, totalCount, Error: Error ?? "" };
};
/*  */
const fetchMoviesById = async (movieId) => {
  const response = await fetch(
    APIURL + "?apikey=" + APIKEY + "&i=" + movieId
  ).then((res) => res.json());
  return response;
};
export { fetchMovies, fetchMoviesById, APIKEY, APIURL };
