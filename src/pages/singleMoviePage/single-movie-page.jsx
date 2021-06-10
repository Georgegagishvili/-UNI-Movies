import DetailedCardLeft from '../../components/single-movie/card-left/DetailedCardLeft';
import DetailedCardRight from '../../components/single-movie/card-right/DetailedCardRight';
import DetailedGallery from '../../components/single-movie/gallery/DetailedGallery';
import DetailedTrailer from '../../components/single-movie/trailer/DetailedTrailer';
import SimilarMovies from '../../components/single-movie/similar-movies/SimilarMovies';
import DetailedComments from '../../components/single-movie/comments/DetailedComments';

import './singleMovieStyle.css';
function SingleMoviePage() {
  return (
    <div className="detailed-body-wrapper">
      <div className="main-body-wrapper">
        <div className="movie-header">
          <div className="top-details">
            <DetailedCardLeft></DetailedCardLeft>
            <DetailedCardRight></DetailedCardRight>
            <div class="actors">
              <span>მსახიობები:</span>
              <div id="actors" class="actors-list"></div>
            </div>
            <DetailedGallery></DetailedGallery>
            <DetailedTrailer></DetailedTrailer>
            <SimilarMovies></SimilarMovies>
            <DetailedComments></DetailedComments>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleMoviePage;
