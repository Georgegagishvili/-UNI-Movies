function SortbyFilter() {
  return (
    <div class="filter-single">
      <label for="sortby">თანმიმდევრობა</label>
      <select id="sortBy" name="sortby" onchange="searchFilter()">
        <option value={0}>თარიღი</option>
        <option value={1}>სახელი</option>
        <option value={2}>წელი</option>
        <option value={3}>შეფასება</option>
        <option value={4}>გადმოწერები</option>
        <option value={5}>მოწონებები</option>
      </select>
    </div>
  );
}
export default SortbyFilter;
