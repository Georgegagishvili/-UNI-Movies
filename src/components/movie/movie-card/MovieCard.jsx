import { Link, useHistory } from 'react-router-dom';
import './movieCardStyle.css';

function MovieCard({ movie }) {
  let history = useHistory();
  const redirect = () => {
    // history.push('/movie?id=' + movie.id);
    window.location.reload();
  };
  return (
    <div className="movie-single">
      <div className="movie-single-img-wrapper">
        <img src={movie.medium_cover_image} alt={movie.title} />
        <span className="movie-single-star">★</span>
        <span className="movie-single-rating">{movie.rating}/10</span>
        <span className="movie-single-category">
          {movie.genres && movie.genres.join(', ')}
        </span>

        <button className="movie-single-button" onClick={redirect}>
          <Link to={'/movie?id=' + movie.id} className="movie-single">
            სრულად ნახვა
          </Link>
        </button>
      </div>
      <div className="movie-single-properties">
        <span>{movie.title}</span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}

export default MovieCard;
