import { useHistory } from 'react-router-dom';
import './movieCardStyle.css';
function MovieCard({ title, year, rating, genres, id, cover }) {
  let history = useHistory();
  const redirect = () => {
    history.push('/wishlist?id=' + id);
    window.location.reload();
  };
  return (
    <div class="movie-single">
      <div class="movie-single-img-wrapper">
        <img src={cover} alt={title} />
        <span class="movie-single-star">★</span>
        <span class="movie-single-rating">{rating}/10</span>
        <span class="movie-single-category">{genres.join(', ')}</span>

        <button className="movie-single-button" onClick={redirect}>
          სრულად ნახვა
        </button>
      </div>
      <div class="movie-single-properties">
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </div>
  );
}

export default MovieCard;
