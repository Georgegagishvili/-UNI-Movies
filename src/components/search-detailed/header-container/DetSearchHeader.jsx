import QualityFilter from '../header/quality-filter/QualityFilter';
import GenreFilter from '../header/genre-filter';
import RatingFilter from '../header/rating-filter/RatingFilter';
import OrderbyFilter from '../header/orderby-filter/OrderbyFilter';
import SortbyFilter from '../header/sortby-filter';
function DetSearchHeader() {
  return (
    <div className="form-wrapper">
      <div className="search-form">
        <span>საძიებო სიტყვა</span>

        <div class="search-term">
          <input id="filterInput" type="" name="" />
          <button onclick="filter()" style={{ cursor: 'pointer' }}>
            ძიება
          </button>
        </div>
        <div className="filter-wrapper">
          <QualityFilter></QualityFilter>
          <GenreFilter></GenreFilter>
          <RatingFilter></RatingFilter>
          <OrderbyFilter></OrderbyFilter>
          <SortbyFilter></SortbyFilter>
        </div>
      </div>
    </div>
  );
}

export default DetSearchHeader;
