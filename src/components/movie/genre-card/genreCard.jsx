import './genreStyle.css';

function GenreCard({ img, genre_name }) {
  return (
    <a href="/">
      <div class="genre-single">
        <img src={img}></img>
        <span class="genre-name">{genre_name}</span>
      </div>
    </a>
  );
}
export default GenreCard;
