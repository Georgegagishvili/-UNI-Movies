function DetailedGallery({ img1, img2, img3 }) {
  return (
    <div class="gallery">
      <div class="gallery-images">
        <div class="horizontal-images">
          <img id="img1" src={img1} alt="screenshot" />
          <img id="img2" src={img2} alt="screenshot" />
          <img id="img3" src={img3} alt="screenshot" />
        </div>
      </div>
    </div>
  );
}

export default DetailedGallery;
