import './bannerStyle.css';
function Banner({ img }) {
  return (
    <div
      className="main-banner"
      style={{
        backgroundImage: `url("${img}")`,
      }}>
      <div className="blurry-banner"></div>
      <div className="banner-info">
        <span className="film-of-the-day">დღის ფილმი</span>
        <div className="banner-movie-info">
          <span className="banner-title-georgian">
            შურისმაძიებლები: უსასრულობის ომი
          </span>
          <span className="banner-title-english">Avengers: Infinity War</span>
          <button className="watch-featured">უყურე</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
