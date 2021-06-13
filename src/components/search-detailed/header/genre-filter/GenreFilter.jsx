import { genresArrayGeo } from '../../../../variables';

function GenreFilter({ query, setQuery }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.genre = value;
    setQuery(tmpQuery);
  };

  return (
    <div class="filter-single">
      <label for="genre">ჟანრი</label>
      <select name="genre" onChange={({ target }) => updateQuery(target.value)}>
        <option value={0}>ყველა</option>
        {genresArrayGeo.map((option, index) => (
          <option
            value={index + 1}
            selected={query.genre == index + 1 && 'selected'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default GenreFilter;
