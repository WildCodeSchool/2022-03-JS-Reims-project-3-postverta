import propTypes from "prop-types";
import slugify from "../services/slugify";
import "./Card.css";

export default function Card({ card }) {
  return (
    <article
      className={`card h-28 w-16 overflow-hidden truncate   ${slugify(
        card.classe
      )}`}
    >
      <header>
        <h1 className="card__name  truncate ">{card.name}</h1>
        <span
          className="card__stars "
          style={{ paddingLeft: `${card.starCount}rem` }}
        >
          {card.starCount} star(s)
        </span>
      </header>
      <figure className="card__figure ">
        <img
          className="card__img w-14 self-center "
          src="https://picsum.photos/100"
          alt="Quentin"
        />
        <figcaption className="card__figcaption ">
          <p className="card__class ">[ {card.classe} ]</p>
          <p className="card__type ">
            {card.type}/ {card.element}
          </p>

          <p className="card__stats">
            ({card.pv}pv) ATK /{card.attack} DEF /{card.defense}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

// <p className="card__skill ">{card.skill}</p>
Card.propTypes = {
  card: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    classe: propTypes.string.isRequired,
    pv: propTypes.number,
    type: propTypes.string,
    element: propTypes.string,
    skill: propTypes.string,
    attack: propTypes.number,
    defense: propTypes.number,
    starCount: propTypes.number,
  }),
};

Card.defaultProps = {
  card: {
    id: 0,
    name: "",
    classe: "",
    starCount: 0,
    pv: 0,
    type: "",
    element: "",
    skill: "",
    attack: 0,
    defense: 0,
  },
};
