import GenreCard from '../../components/movie/genre-card/genreCard';

import './mainpage.css';

function MainPage() {
  return (
    <div>
      <div className="genre-wrapper">
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
        <GenreCard
          genre_name="კომედია"
          img="https://pngimg.com/uploads/triangle/triangle_PNG30.png"
        />
      </div>
    </div>
  );
}

export default MainPage;
