function RatingFilter() {
  return (
    <div class="filter-single">
      <label for="rating">რეიტინგი</label>
      <select id="rating" name="rating" onchange="searchFilter()">
        <option value={0}>ყველა</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5+</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
        <option value={9}>9+</option>
      </select>
    </div>
  );
}

export default RatingFilter;
