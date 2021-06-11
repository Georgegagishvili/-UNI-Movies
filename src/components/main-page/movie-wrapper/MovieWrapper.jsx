function MovieWrapper({ film_type, children, onClick }) {
  return (
    <div className="movie-wrapper">
      <span>{film_type}</span>
      <div class="movie-scroll-wrapper">
        <button onclick={onClick}>»</button>
      </div>
      <div id="popular" class="movie-single-wrapper">
        {children}
      </div>
    </div>
  );
}

export default MovieWrapper;
