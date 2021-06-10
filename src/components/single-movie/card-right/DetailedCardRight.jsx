function DetailedCardRight() {
  return (
    <div class="card-right">
      <span id="title">...</span>
      <span id="year">...</span>
      <p id="genres"></p>
      <div class="movie-details">
        <span>ფილმის აღწერა:</span>
        <p id="description">...</p>
        <div class="available-in">
          <span>ჩაიწერე / უყურე:</span>
          <div id="links" class="available-buttons"></div>
        </div>
        <div class="ratings">
          <div class="rating-imdb">
            <p id="imdb">IMDb: ... ☆</p>
          </div>
          <div class="ratings-likes">
            <p id="likes">♥ Likes: ...</p>
          </div>
          <p id="runtime"> ხანგრძლივობა: ...</p>
        </div>
      </div>
    </div>
  );
}
export default DetailedCardRight;
