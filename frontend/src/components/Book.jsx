import { useState } from "react";
import { Link } from "react-router-dom";
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
          <h1 className="m-2">{book.title}</h1>
          <p className="m-5">{book.synopsis}</p>
          <Link to="/book">Lire le livre</Link>
        </figcaption>
      </figure>
      <button
        type="button"
        className="bg-white font-semibold py-2 px-4 border border-black rounded-3xl mt-4"
        onClick={toggleFlip}
      >
        Synopsis
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
