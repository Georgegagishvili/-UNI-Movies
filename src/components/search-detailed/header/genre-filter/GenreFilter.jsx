function GenreFilter() {
  return (
    <div class="filter-single">
      <label for="genre">ჟანრი</label>
      <select id="genre" name="genre" onchange="searchFilter()">
        <option value={0}>ყველა</option>
        <option value={1}>კომედია</option>
        <option value={2}>სამეცნიერო ფანტასტიკა</option>
        <option value={3}>საშინელებათა</option>
        <option value={4}>რომანტიკა</option>
        <option value={5}>ექშენი</option>
        <option value={6}>თრილერი</option>
        <option value={7}>მისტიკა</option>
        <option value={8}>კრიმინალი</option>
        <option value={9}>ანიმაცია</option>
        <option value={10}>სათავგადასავლო</option>
        <option value={11}>ფანტასტიკა</option>
        <option value={12}>დრამა</option>
        <option value={13}>ისტორია</option>
        <option value={14}>ბიოგრაფია</option>
        <option value={15}>დოკუმენტალური</option>
        <option value={16}>საოჯახო</option>
        <option value={17}>ფილმ-ნოირი</option>
        <option value={18}>გეიმ-შოუ</option>
        <option value={19}>მუსიკა</option>
        <option value={20}>მუსიკალური</option>
        <option value={21}>სიახლეები</option>
        <option value={22}>რეალითი-ტივი</option>
        <option value={23}>სპორტი</option>
        <option value={24}>ომი</option>
        <option value={25}>თალქ-შოუ</option>
        <option value={26}>ვესტერნი</option>
      </select>
    </div>
  );
}
export default GenreFilter;
