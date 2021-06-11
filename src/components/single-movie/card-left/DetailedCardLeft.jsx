function CardLeft({ cover, imdb_code }) {
  return (
    <div className="card-left">
      <a href={`https://www.imdb.com/title/${imdb_code}`} id="imdbLink">
        <img id="cover" src={cover.toString()} />
      </a>
    </div>
  );
}

export default CardLeft;
