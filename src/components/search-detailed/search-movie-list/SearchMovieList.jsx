import { useEffect, useState } from 'react';
import MovieCard from '../../movie/movie-card/MovieCard';
import './SearchSingleMovie.css';
function SearchMovieList({ query = '' }) {
  const [movies, setMovies] = useState(null);

  const fetchData = () => {
    fetch('https://yts.mx/api/v2/list_movies.json?' + query + '&limit=24', {
      method: 'GET',
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setMovies(responseData.data.movies);
      })
      .catch(function (error) {
        if (error === 404) {
          console.log('Page Not found', error);
        } else {
          console.log('Server Error');
        }
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="detailed-search-movies">
      <div id="results" class="movie-single-wrapper">
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}

export default SearchMovieList;
