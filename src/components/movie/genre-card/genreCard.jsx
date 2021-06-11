import { Link, useHistory } from 'react-router-dom';
import './genreStyle.css';

function GenreCard({ genre, name }) {
  return (
    <Link to={`/search?genre=${genre}`}>
      <div class="genre-single">
        <img
          style={{
            filter:
              'invert(84%) sepia(26%) saturate(4612%) hue-rotate(3deg) brightness(105%) contrast(109%)',
          }}
          src={`${process.env.PUBLIC_URL}/icons/${genre}.svg`}
        />

        <span class="genre-name">{name}</span>
      </div>
    </Link>
  );
}
export default GenreCard;
