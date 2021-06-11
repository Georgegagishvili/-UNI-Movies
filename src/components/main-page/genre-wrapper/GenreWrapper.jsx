import GenreCard from '../../movie/genre-card/genreCard';
function GenreWrapper({ title, onClick, children }) {
  return (
    <div className="genre-wrapper">
      <span>{title}</span>
      <div class="movie-scroll-wrapper"></div>
      <div id="genres" className="genre-list">
        {children}
      </div>
      <div></div>
    </div>
  );
}
export default GenreWrapper;
