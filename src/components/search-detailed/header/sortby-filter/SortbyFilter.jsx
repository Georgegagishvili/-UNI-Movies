import { sortByArrayGeo } from '../../../../variables';

function SortbyFilter({ query, setQuery }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.sort_by = value;
    setQuery(tmpQuery);
  };

  return (
    <div class="filter-single">
      <label for="sortby">თანმიმდევრობა</label>
      <select
        name="sortby"
        onChange={({ target }) => updateQuery(target.value)}>
        {sortByArrayGeo.map((option, index) => (
          <option value={index} selected={query.sort_by == index && 'selected'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default SortbyFilter;
