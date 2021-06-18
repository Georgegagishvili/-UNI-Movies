import { useEffect, useState } from 'react';

function SinglePaging({ page_number, query, setQuery, filter }) {
  const updatePage = () => {
    let tmpQuery = query;
    tmpQuery.page = page_number;
    setQuery(tmpQuery);
    filter();
  };

  const [bg, setBg] = useState('');

  useEffect(() => {
    if (page_number == query.page) {
      setBg('red');
    }
  }, []);

  return (
    <li
      style={{ backgroundColor: bg }}
      onClick={() => {
        updatePage();
      }}
      className="single-page">
      <p>{page_number}</p>
    </li>
  );
}

export default SinglePaging;
