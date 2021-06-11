import { useHistory } from 'react-router-dom';
import './movieCardStyle.css';
function MovieCard({ title, year, rating, genres, id, cover }) {
  let history = useHistory();
  const redirect = () => {
    history.push('/wishlist?id=');
    window.location.reload();
  };
  return (
    <div class="movie-single">
      <div class="movie-single-img-wrapper">
        <img
          src="http://placehold.it/200x305"
          alt="http://placehold.it/200x305"
        />
        <span class="movie-single-star">★</span>
        <span class="movie-single-rating">{}/10</span>
        <span class="movie-single-category">წელიწადი</span>

        <button className="movie-single-button" onClick={redirect}>
          სრულად ნახვა
        </button>
      </div>
      <div class="movie-single-properties">
        <span>ფილმის სახელი{}</span>
        <span>წელიწადი{}</span>
      </div>
    </div>
  );
}

export default MovieCard;
