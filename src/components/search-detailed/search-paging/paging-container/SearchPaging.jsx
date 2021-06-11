import SinglePaging from '../single-paging/SinglePaging';
function SearchPaging() {
  return (
    <ul id="pageWrapperTop" class="page-list">
      <SinglePaging page_number="1"></SinglePaging>
      <SinglePaging page_number="2"></SinglePaging>
      <SinglePaging page_number="3"></SinglePaging>
      <SinglePaging page_number="4"></SinglePaging>
      <SinglePaging page_number="5"></SinglePaging>
      <SinglePaging page_number="6"></SinglePaging>
    </ul>
  );
}

export default SearchPaging;
