import { useState } from "react";
import propTypes from "prop-types";
import "./Book.css";

export default function Book({ book }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="m-2 flex justify-center items-center
    flex-col perspective-xl"
    >
      <figure className={`flip-card ${isFlipped ? "hover" : ""}`}>
        <img className="flip-card-front" src={book.cover} alt={book.title} />
        <figcaption className="flip-card-back">
          <h1>{book.title}</h1>
          <p>{book.synopsis}</p>
        </figcaption>
      </figure>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleFlip}
      >
        Flip
      </button>
    </div>
  );
}

Book.propTypes = {
  book: propTypes.shape({
    title: propTypes.string.isRequired,
    cover: propTypes.string.isRequired,
    synopsis: propTypes.string.isRequired,
  }).isRequired,
};
