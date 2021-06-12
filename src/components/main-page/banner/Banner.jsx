import './bannerStyle.css';
function Banner() {
  return (
    <div
      className="main-banner"
      style={{
        backgroundImage: "url('https://bit.ly/3iBGEkE')",
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
