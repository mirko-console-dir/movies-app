import { useState } from "react";

const SearchBar = ({ onSearchCange }) => {
  const [search, setSearch] = useState("");

  const menageSearch = (evt) => {
    /* così non ci invia il form */
    evt.preventDefault();
    /* così non ci invia il form */

    const s = evt.target.value.trim();

    setSearch(s);
  };
  const searchMovies = (evt) => {
    evt.preventDefault();

    if (search.length >= 2) {
      /* viene passato da navbar  */
      onSearchCange(search);
    }
  };
  return (
    <form className="d-flex">
      {/* name per catturarlo , onChange camelcase*/}
      <input
        className="form-control me-2"
        type="search"
        value={search}
        name="search"
        onChange={menageSearch}
        placeholder="Search"
        aria-label="Search"
      />
      <button
        onClick={searchMovies}
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
      <button
        onClick={() => {
          setSearch("");
        }}
        className="btn btn-outline-info"
        type="reset"
      >
        Reset
      </button>
    </form>
  );
};
export default SearchBar;
