function DetailedTrailer({ code }) {
  return (
    <div class="video-wrapper">
      <span>ტრეილერი:</span>
      <div class="video-player">
        <iframe
          src={`https://www.youtube.com/embed/${code}?autoplay=0`}
          id="ytplayer"
          name="ytplayer"
          type="text/html"
          width="640"
          height="360"
          frameborder="0"
          allow="accelerometer; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default DetailedTrailer;
