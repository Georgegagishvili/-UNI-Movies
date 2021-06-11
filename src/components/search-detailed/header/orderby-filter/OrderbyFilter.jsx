function OrderbyFilter() {
  return (
    <div class="filter-single">
      <label for="orderby">დალაგება</label>
      <select id="orderBy" name="orderby" onchange="searchFilter()">
        <option value={0}>კლების მიხედვით</option>
        <option value={1}>ზრდის მიხედვით</option>
      </select>
    </div>
  );
}

export default OrderbyFilter;
