import { useEffect, useState } from 'react';
import MovieCard from '../../movie/movie-card/MovieCard';
import './SearchSingleMovie.css';
function SearchMovieList({ queryString = '' }) {
  const [movies, setMovies] = useState(null);

  const [message, setMessage] = useState(null);

  const fetchData = () => {
    setMessage('Loading...');
    fetch(
      'https://yts.mx/api/v2/list_movies.json?' + queryString + '&limit=24',
      {
        method: 'GET',
      }
    )
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        if (responseData.data.movies) {
          setMovies(responseData.data.movies);
          setMessage(null);
        } else {
          setMessage('No Results :(');
        }
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
        {message && <p>{message}</p>}
        {movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}

export default SearchMovieList;
