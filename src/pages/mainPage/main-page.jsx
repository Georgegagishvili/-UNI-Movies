import GenreCard from '../../components/movie/genre-card/genreCard';
import MovieCard from '../../components/movie/movie-card/MovieCard';
import MovieWrapper from '../../components/main-page/movie-wrapper';
import GenreWrapper from '../../components/main-page/genre-wrapper';

import './mainpage.css';

function MainPage() {
  return (
    <div className="body-wrapper">
      <MovieWrapper film_type="ტოპ ფილმები:" onClick={function name(params) {}}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </MovieWrapper>

      <GenreWrapper title="ჟანრები:">
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
        <GenreCard
          img="https://bit.ly/3znvKoS"
          genre_name="კომედია"></GenreCard>
      </GenreWrapper>

      <MovieWrapper film_type="უახლესი" onClick={function name(params) {}}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </MovieWrapper>

      <MovieWrapper
        film_type="შემთხვევითი ჟანრი: რამე"
        onClick={function name(params) {}}>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </MovieWrapper>
    </div>
  );
}

export default MainPage;
