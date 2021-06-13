import React from 'react';
import { useEffect, useState, useHistory } from 'react';
import { browserHistory } from 'react-router';

import DetailedCardLeft from '../../components/single-movie/card-left/DetailedCardLeft';
import DetailedCardRight from '../../components/single-movie/card-right/DetailedCardRight';
import DetailedGallery from '../../components/single-movie/gallery/DetailedGallery';
import DetailedTrailer from '../../components/single-movie/trailer/DetailedTrailer';
import SimilarMovies from '../../components/single-movie/similar-movies/SimilarMovies';
import DetailedComments from '../../components/single-movie/comments/DetailedComments';
import './singleMovieStyle.css';
function SingleMoviePage() {
  window.onpopstate = function () {
    window.location.reload();
  };

  document.title = 'Loading...';
  const query_string = window.location.search;
  const url_params = new URLSearchParams(query_string);
  const id = url_params.get('id');

  const [movie, setMovie] = useState(null);

  const fetchData = () => {
    fetch(
      'https://yts.mx/api/v2/movie_details.json?with_images=true&movie_id=' +
        id,
      {
        method: 'GET',
      }
    )
      .then(function (response) {
        if (response.status !== 200) {
          throw response.status;
        }
        return response.json();
      })
      .then(function (responseData) {
        setMovie(responseData.data.movie);
        document.title = responseData.data.movie.title;
      })
      .catch(function (error) {
        if (error === 404) {
          console.log('Page Not found', error);
        } else {
          console.log('Server Error');
        }
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="main-background"></div>
      <div className="detailed-body-wrapper">
        {movie && (
          <div className="main-body-wrapper">
            <div className="movie-header">
              <div className="top-details">
                <DetailedCardLeft
                  cover={movie.medium_cover_image}
                  imdb_code={movie.imdb_code}
                />
                <DetailedCardRight
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                  description={movie.description_full}
                  rating={movie.rating}
                  likes={movie.like_count}
                  runtime={movie.runtime}
                  torrents={movie.torrents}
                />
                <div class="actors">
                  {/* <span>მსახიობები:</span> */}
                  <div id="actors" className="actors-list"></div>
                </div>
                <DetailedGallery
                  img1={movie.large_screenshot_image1}
                  img2={movie.large_screenshot_image2}
                  img3={movie.large_screenshot_image3}
                />
                <DetailedTrailer code={movie.yt_trailer_code} />
              </div>
            </div>
            <SimilarMovies id={id} />
            <DetailedComments id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
export default SingleMoviePage;
