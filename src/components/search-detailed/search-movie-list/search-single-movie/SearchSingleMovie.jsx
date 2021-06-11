function SearchSingleMovie() {
  return (
    <div class="movie-single">
      <div class="movie-single-img-wrapper">
        <img src="http://placehold.it/200x305" />
        <span class="movie-single-star">★</span>
        <span class="movie-single-rating">6.9/10</span>
        <span class="movie-single-category">კატეგორია</span>
        <button class="movie-single-button">სრულად ნახვა</button>
      </div>
      <div class="movie-single-properties">
        <span>ფილმის სახელი</span>
        <span>კატეგორია</span>
      </div>
    </div>
  );
}

export default SearchSingleMovie;
