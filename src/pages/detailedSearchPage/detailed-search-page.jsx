import { useEffect, useState } from 'react';
import DetSearchHeader from '../../components/search-detailed/header-container';
import SearchPaging from '../../components/search-detailed/search-paging/paging-container/SearchPaging';
import SearchMovieList from '../../components/search-detailed/search-movie-list/SearchMovieList';
import {
  genresArray,
  qualitiesArray,
  sortByArray,
  orderByArray,
} from '../../variables';
import './detailedSearch.css';

function DetailedSearchPage() {
  const [mounted, setMounted] = useState(false);

  const [query, setQuery] = useState({
    query_term: '',
    quality: 0,
    genre: 0,
    minimum_rating: 0,
    sort_by: 0,
    order_by: 0,
  });

  const filter = () => {
    let url = '/search?';

    url += `&query_term=${query.query_term}`;
    url += `&quality=${query.quality}`;
    url += `&genre=${query.genre}`;
    url += `&minimum_rating=${query.minimum_rating}`;
    url += `&sort_by=${query.sort_by}`;
    url += `&order_by=${query.order_by}`;
    window.location.replace(url.substring(1));
  };

  const clear = () => {
    setQuery({
      query_term: '',
      quality: 0,
      genre: 0,
      minimum_rating: 0,
      sort_by: 0,
      order_by: 0,
    });
    window.location.replace('/search');
  };

  useEffect(() => {
    let tmpQuery = query;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get('quality')) {
      tmpQuery.quality = urlParams.get('quality');
    }
    if (urlParams.get('minimum_rating')) {
      tmpQuery.minimum_rating = urlParams.get('minimum_rating');
    }
    if (urlParams.get('query_term')) {
      tmpQuery.query_term = urlParams.get('query_term');
    }
    if (urlParams.get('genre')) {
      tmpQuery.genre = urlParams.get('genre');
    }
    if (urlParams.get('sort_by')) {
      tmpQuery.sort_by = urlParams.get('sort_by');
    }
    if (urlParams.get('order_by')) {
      tmpQuery.order_by = urlParams.get('order_by');
    }

    setQuery(tmpQuery);
    setMounted(true);
  }, []);

  return (
    <div>
      <div id="body" class="detailed-search-body-wrapper">
        <DetSearchHeader
          query={query}
          setQuery={setQuery}
          filter={filter}
          clear={clear}
        />
      </div>
      <div class="pagination">
        <SearchPaging />
      </div>
      <div class="detailed-search-movie-body">
        {mounted && (
          <SearchMovieList
            query={`query_term=${query.query_term}&quality=${
              qualitiesArray[query.quality]
            }&genre=${genresArray[query.genre]}&minimum_rating=${
              query.minimum_rating
            }&sort_by=${sortByArray[query.sort_by]}&order_by=${
              orderByArray[query.order_by]
            }`}
          />
        )}
      </div>
    </div>
  );
}
export default DetailedSearchPage;
