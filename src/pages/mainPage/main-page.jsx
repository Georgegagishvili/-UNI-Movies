import { useEffect, useState } from 'react';
import GenreCard from '../../components/movie/genre-card/genreCard';
import MovieCard from '../../components/movie/movie-card/MovieCard';
import MovieWrapper from '../../components/main-page/movie-wrapper';
import GenreWrapper from '../../components/main-page/genre-wrapper';
import Banner from '../../components/main-page/banner/Banner';

import { genresArray, genresArrayGeo } from '../../variables';
import './mainpage.css';

function MainPage() {
  const [topMovies, setTopMovies] = useState(null);
  const [newMovies, setNewMovies] = useState(null);
  const [bestMovies, setBestMovies] = useState(null);
  const [randomMovies, setRandomMovies] = useState(null);

  const fetchData = (setMoviesType, setMovieQuery) => {
    fetch('https://yts.mx/api/v2/list_movies.json?' + setMovieQuery, {
      method: 'GET',
    })
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setMoviesType(responseData.data.movies);
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
    fetchData(
      setTopMovies,
      `sort_by=download_count&limit=10&page=${Math.floor(Math.random() * 101)}`
    );

    fetchData(setNewMovies, 'sort_by=date_added_count&limit=10');

    fetchData(
      setBestMovies,
      `sort_by=rating&limit=10&page=${Math.floor(Math.random() * 51)}`
    );

    fetchData(
      setRandomMovies,
      `sort_by=download_count&limit=10&page=${Math.floor(Math.random() * 301)}`
    );
  }, []);

  return (
    <div className="body-wrapper">
      <div className="main-background"></div>
      <Banner img="https://bit.ly/3iBGEkE"></Banner>
      <MovieWrapper film_type="პოპულარული:">
        {topMovies && topMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>

      <GenreWrapper title="ჟანრები:">
        {genresArrayGeo.map((genre, index) => (
          <GenreCard
            genre={genresArray[index + 1]}
            name={genre}
            index={index + 1}
          />
        ))}
      </GenreWrapper>

      <MovieWrapper film_type="უახლესი:">
        {newMovies && newMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>

      <MovieWrapper film_type="შემთხვევითი:">
        {randomMovies &&
          randomMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>

      <MovieWrapper film_type="საუკეთესო:">
        {bestMovies && bestMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>
    </div>
  );
}

export default MainPage;
