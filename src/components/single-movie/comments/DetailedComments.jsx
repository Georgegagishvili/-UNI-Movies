import SingleComment from '../single-comment/SingleComment';

function DetailedComments() {
  return (
    // <!-- COMMENTS -->
    <div id="comments" class="comment-wrapper">
      <span>კომენტარები:</span>
      <SingleComment></SingleComment>
      <SingleComment></SingleComment>
    </div>
    // <!-- COMMENTS -->
  );
}
export default DetailedComments;
