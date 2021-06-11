import { useEffect, useState } from 'react';
import GenreCard from '../../components/movie/genre-card/genreCard';
import MovieCard from '../../components/movie/movie-card/MovieCard';
import MovieWrapper from '../../components/main-page/movie-wrapper';
import GenreWrapper from '../../components/main-page/genre-wrapper';

import './mainpage.css';

function MainPage() {
  var genresArray = [
    'comedy',
    'sci-fi',
    'horror',
    'romance',
    'action',
    'thriller',
    'mystery',
    'crime',
    'animation',
    'adventure',
    'fantasy',
    'drama',
    'history',
    'biography',
    'documentary',
    'family',
    'film-noir',
    'game-show',
    'music',
    'musical',
    'news',
    'reality-tv',
    'sport',
    'war',
    'talk-show',
    'western',
  ];
  var genresArrayGeo = [
    'კომედია',
    'სამეცნიერო ფანტასტიკა',
    'საშინელებათა',
    'რომანტიკა',
    'ექშენი',
    'თრილერი',
    'მისტიკა',
    'კრიმინალი',
    'ანიმაცია',
    'სათავგადასავლო',
    'ფანტასტიკა',
    'დრამა',
    'ისტორია',
    'ბიოგრაფია',
    'დოკუმენტალური',
    'საოჯახო',
    'ფილმ-ნოირი',
    'გეიმ-შოუ',
    'მუსიკა',
    'მუსიკალური',
    'სიახლეები',
    'რეალითი-ტივი',
    'სპორტი',
    'ომი',
    'თალქ-შოუ',
    'ვესტერნი',
  ];

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
      <MovieWrapper film_type="პოპულარული:" onClick={function name(params) {}}>
        {topMovies && topMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>

      <GenreWrapper title="ჟანრები:">
        {genresArrayGeo.map((genre, index) => (
          <GenreCard genre={genresArray[index]} name={genre} />
        ))}
      </GenreWrapper>

      <MovieWrapper film_type="უახლესი:">
        {newMovies && newMovies.map((movie) => <MovieCard movie={movie} />)}
      </MovieWrapper>

      <MovieWrapper film_type="შემთხვევითი:" onClick={function name(params) {}}>
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
