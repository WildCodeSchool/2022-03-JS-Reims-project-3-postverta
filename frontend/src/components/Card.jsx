import propTypes from "prop-types";
import slugify from "../services/slugify";
import "./Card.css";

export default function Card({ card }) {
  return (
    <article className={`card p-4 ${slugify(card.classe)}`}>
      <header>
        <h1 className="card__name p-4 mb-4">{card.name}</h1>
        <span
          className="card__stars mb-4"
          style={{ paddingLeft: `${card.starCount}rem` }}
        >
          {card.starCount} star(s)
        </span>
      </header>
      <figure className="card__figure">
        <img
          className="card__img mb-4"
          src="https://picsum.photos/200"
          alt="Quentin"
        />
        <figcaption className="card__figcaption p-2">
          <p className="card__class mb-2">[ {card.classe} ]</p>
          <p className="card__type mb-2">
            {card.type}/ {card.element}
          </p>
          <p className="card__skill mb-2">{card.skill}</p>
          <p className="card__stats">
            ({card.pv}pv) ATK /{card.attack} DEF /{card.defense}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

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
