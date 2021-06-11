import DetSearchHeader from '../../components/search-detailed/header-container';
import SearchPaging from '../../components/search-detailed/search-paging/paging-container/SearchPaging';
import SearchMovieList from '../../components/search-detailed/search-movie-list/SearchMovieList';

import './detailedSearch.css';
function DetailedSearchPage() {
  return (
    <div>
      <div id="body" class="detailed-search-body-wrapper">
        <DetSearchHeader></DetSearchHeader>
      </div>
      <div class="pagination">
        <SearchPaging></SearchPaging>
      </div>
      <div class="detailed-search-movie-body">
        <SearchMovieList></SearchMovieList>
      </div>
    </div>
  );
}
export default DetailedSearchPage;
