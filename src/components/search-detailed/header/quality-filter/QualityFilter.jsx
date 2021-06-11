function QualityFilter() {
  return (
    <div className="filter-single">
      <label for="quality">ხარისხი</label>
      <select id="quality" name="quality" onchange="searchFilter()">
        <option value={0}>ყველა</option>
        <option value={1}>720p</option>
        <option value={2}>1080p</option>
        <option value={3}>2160p</option>
        <option value={4}>3D</option>
      </select>
    </div>
  );
}

export default QualityFilter;
