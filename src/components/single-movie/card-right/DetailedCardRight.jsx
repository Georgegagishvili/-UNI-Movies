function DetailedCardRight({
  title,
  year,
  genres,
  description,
  rating,
  likes,
  runtime,
  torrents,
}) {
  return (
    <div className="card-right">
      <span id="title">{title}</span>
      <span id="year">{year}</span>
      <p id="genres">{genres.join(', ')}</p>
      <div className="movie-details">
        <span>ფილმის აღწერა:</span>
        <p id="description">{description}</p>
        <div className="available-in">
          <span>ჩაიწერე / უყურე:</span>
          <div id="links" className="available-buttons">
            {torrents &&
              torrents.map((torrent) => (
                <a
                  href={torrent.url}
                  className="m-1"
                  title={
                    'ტორენტი:' +
                    '\n' +
                    torrent.size +
                    '\n' +
                    'P/S: ' +
                    torrent.peers +
                    '/' +
                    torrent.seeds
                  }>
                  <button>{torrent.quality + ' ' + torrent.type}</button>
                </a>
              ))}
          </div>
        </div>
        <div className="ratings">
          <div className="rating-imdb">
            <p id="imdb">IMDb: {rating} ☆</p>
          </div>
          <div className="ratings-likes">
            <p id="likes">♥ Likes: {likes}</p>
          </div>
          <p id="runtime"> ხანგრძლივობა: {runtime}</p>
        </div>
      </div>
    </div>
  );
}
export default DetailedCardRight;
