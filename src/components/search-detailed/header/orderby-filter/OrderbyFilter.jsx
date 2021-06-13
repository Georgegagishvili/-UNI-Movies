import { orderByArrayGeo } from '../../../../variables';

function OrderbyFilter({ query, setQuery }) {
  const updateQuery = (value) => {
    let tmpQuery = query;
    tmpQuery.order_by = value;
    setQuery(tmpQuery);
  };

  return (
    <div class="filter-single">
      <label for="orderby">დალაგება</label>
      <select
        name="orderby"
        onClick={({ target }) => updateQuery(target.value)}>
        {orderByArrayGeo.map((option, index) => (
          <option
            value={index}
            selected={query.order_by == index && 'selected'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OrderbyFilter;
