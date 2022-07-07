import { string } from "prop-types";
import { defaultCard, CardType } from "../prop-types/CardType";
import slugify from "../services/slugify";
import "./Card.css";

export default function CardDetails({ card, className }) {
  return (
    <article
      className={`card p-2 ${slugify(card.classe)}${
        className ? ` ${className}` : ""
      }`}
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
          className="card__img self-center "
          src={`${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/assets/images/${card.id}.png`}
          alt={card.name}
        />
      </figure>
      <figcaption className="card__figcaption ">
        <p className="card__type ">
          {card.type}/ {card.element}
        </p>
        <p className="card__skill ">{card.skill}</p>
        <p className="card__class ">[ {card.classe} ]</p>
      </figcaption>
      <p className="card__stats">
        ({card.pv}pv) ATK /{card.attack} DEF /{card.defense}
      </p>
    </article>
  );
}

CardDetails.propTypes = {
  card: CardType.isRequired,
  className: string,
};
CardDetails.defaultProps = { ...defaultCard, className: null };
