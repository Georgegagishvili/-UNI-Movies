import SearchSingleMovie from './search-single-movie/SearchSingleMovie';
import './SearchSingleMovie.css';
function SearchMovieList() {
  return (
    <div class="detailed-search-movies">
      <div id="results" class="movie-single-wrapper">
        {/* <!-- SINGLE MOVIE --> */}
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        <SearchSingleMovie></SearchSingleMovie>
        {/* <!-- SINGLE MOVIE --> */}
      </div>
    </div>
  );
}

export default SearchMovieList;
