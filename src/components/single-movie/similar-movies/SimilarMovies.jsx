import MovieCard from '../../movie/movie-card/MovieCard';
function SimilarMovies() {
  return (
    <div class="movie-wrapper">
      <span>მსგავსი ფილმები:</span>
      {/* <!-- SINGLE MOVIE WRAPPER --> */}
      <div id="suggestions" class="movie-single-wrapper">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
      {/* <!-- SINGLE MOVIE WRAPPER --> */}
    </div>
  );
}

export default SimilarMovies;
