import Menu from "./Menu";
import SearchBar from "./SearchBar";
/* se volessi tutti i paramatri dovrei passare params per passarlo a searchBar*/
const NavBar = ({ onSearchCange }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Carousel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Menu />
        {/* passare tutti i params {...params} */}
        <SearchBar onSearchCange={onSearchCange} />
      </div>
    </nav>
  );
};
export default NavBar;
