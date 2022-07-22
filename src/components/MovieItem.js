const MovieItem = ({ movie, onSelectedMovie }) => {
  return (
    <div className="card col-md-3 col-lg-6" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
      </div>
      <div className="card-footer">
        <button
          onClick={() => {
            onSelectedMovie(movie);
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          href={"/movies/" + movie.imdbID}
          className="btn btn-primary "
        >
          View Details
        </button>
      </div>
    </div>
  );
};
export default MovieItem;
