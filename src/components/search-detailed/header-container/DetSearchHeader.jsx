import QualityFilter from '../header/quality-filter/QualityFilter';
import GenreFilter from '../header/genre-filter';
import RatingFilter from '../header/rating-filter/RatingFilter';
import OrderbyFilter from '../header/orderby-filter/OrderbyFilter';
import SortbyFilter from '../header/sortby-filter';

function DetSearchHeader({ query, setQuery, filter, clear }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.query_term = value;
    setQuery(tmpQuery);
  };

  return (
    <div className="form-wrapper">
      <div className="search-form">
        <span>საძიებო სიტყვა</span>
        <div class="search-term">
          <input
            defaultValue={query.query_term}
            onChange={({ target }) => updateQuery(target.value)}
            onKeyUp={
              ('keyup',
              ({ key }) => {
                if (key === 'Enter') {
                  filter();
                }
              })
            }
          />
          <button onClick={filter}>ძიება</button>
        </div>
        <div className="filter-wrapper">
          <QualityFilter query={query} setQuery={setQuery} />
          <GenreFilter query={query} setQuery={setQuery} />
          <RatingFilter query={query} setQuery={setQuery} />
          <OrderbyFilter query={query} setQuery={setQuery} />
          <SortbyFilter query={query} setQuery={setQuery} />
          <button onClick={clear}>გასუფთავება</button>
        </div>
      </div>
    </div>
  );
}

export default DetSearchHeader;
