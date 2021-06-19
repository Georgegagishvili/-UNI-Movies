function MovieWrapper({ film_type, children, onClick }) {
  return (
    <div className="movie-wrapper">
      <span className="filmtype">{film_type}</span>
      <div className="movie-scroll-wrapper"></div>
      <div id="popular" className="movie-single-wrapper">
        {children}
      </div>
    </div>
  );
}

export default MovieWrapper;
