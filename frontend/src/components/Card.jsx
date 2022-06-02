import propTypes from "prop-types";
import "./Card.css";

export default function Card({ card }) {
  return (
    <article className={`card ${card.class}`}>
      <header>
        <h1 className="card__name">{card.name}</h1>
        <span
          className="card__stars"
          style={{ paddingLeft: `${card.starCount}rem` }}
        >
          {card.starCount} star(s)
        </span>
      </header>
      <figure className="card__figure">
        <img
          className="card__img"
          src="https://picsum.photos/200"
          alt="Quentin"
        />
        <figcaption className="card__figcaption">
          <p className="card__class">
            [ {card.class} ({card.pv}pv) ]
          </p>
          <p className="card__type">
            {card.type}/ {card.element}
          </p>
          <p className="card__skill">{card.skill}</p>
          <p className="card__stats">
            ATK /{card.attack} DEF /{card.defense}
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
    class: propTypes.string.isRequired,
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
    class: "",
    starCount: 0,
    pv: 0,
    type: "",
    element: "",
    skill: "",
    attack: 0,
    defense: 0,
  },
};
