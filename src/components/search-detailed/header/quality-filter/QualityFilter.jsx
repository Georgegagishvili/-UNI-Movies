import { qualitiesArrayGeo } from '../../../../variables';

function QualityFilter({ query, setQuery }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.quality = value;
    setQuery(tmpQuery);
  };

  return (
    <div className="filter-single">
      <label for="quality">ხარისხი</label>
      <select
        defaultValue={query.quality}
        name="quality"
        onChange={({ target }) => updateQuery(target.value)}>
        {qualitiesArrayGeo.map((option, index) => (
          <option value={index} selected={query.quality == index && 'selected'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QualityFilter;
