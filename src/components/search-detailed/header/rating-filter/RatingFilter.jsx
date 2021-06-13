import { ratingArray } from '../../../../variables';

function RatingFilter({ query, setQuery }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.minimum_rating = value;
    setQuery(tmpQuery);
  };

  return (
    <div class="filter-single">
      <label for="rating">რეიტინგი</label>
      <select
        name="rating"
        onChange={({ target }) => updateQuery(target.value)}>
        {ratingArray.map((option, index) => (
          <option
            value={index}
            selected={query.minimum_rating == index && 'selected'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RatingFilter;
