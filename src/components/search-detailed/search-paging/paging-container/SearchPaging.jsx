import { useEffect, useState } from 'react';
import SinglePaging from '../single-paging/SinglePaging';
function SearchPaging({ page_count, query, setQuery, filter }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (page_count > 1) {
      let tmpPages = pages;
      for (var i = 1; i < page_count + 1; i++) {
        tmpPages.push(i);
      }
      setPages(tmpPages);
    }
  }, []);

  return (
    <ul id="pageWrapperTop" class="page-list">
      {pages &&
        pages.map((page) => (
          <SinglePaging
            page_number={page}
            query={query}
            setQuery={setQuery}
            filter={filter}
          />
        ))}
    </ul>
  );
}

export default SearchPaging;
