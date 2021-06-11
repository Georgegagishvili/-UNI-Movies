import React from 'react';
import { useEffect, useState } from 'react';

function DetailedComments({ id }) {
  const [comments, setComments] = useState(null);

  function fetchData() {
    function render() {
      setComments(this.responseText);
    }
    let req = new XMLHttpRequest();
    req.addEventListener('load', render);
    req.open('GET', `https://yts.mx/ajax/comments/${id}?offset=0`);
    req.send();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <!-- COMMENTS -->
    <div className="comment-wrapper">
      <span>კომენტარები:</span>
      {comments && (
        <div
          className="comment-wrapper"
          dangerouslySetInnerHTML={{ __html: comments }}
        />
      )}
    </div>
    // <!-- COMMENTS -->
  );
}
export default DetailedComments;
