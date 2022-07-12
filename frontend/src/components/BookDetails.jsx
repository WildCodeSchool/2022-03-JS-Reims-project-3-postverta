import propTypes from "prop-types";

export default function BookDetails({ book }) {
  return (
    <div className="modal-window-book">
      <h1 className="m-2">{book.title}</h1>
      <p className="m-5">{book.synopsis}</p>
    </div>
  );
}

BookDetails.propTypes = {
  book: propTypes.shape({
    title: propTypes.string.isRequired,
    cover: propTypes.string,
    synopsis: propTypes.string,
    chapter: propTypes.arrayOf(
      propTypes.shape({
        title: propTypes.string.isRequired,
        content: propTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
