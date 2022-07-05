import { string } from "prop-types";
import { defaultCard, CardType } from "../prop-types/CardType";
import slugify from "../services/slugify";
import "./Card.css";

export default function Card({ card, className }) {
  return (
    <article
      className={`card h-28 w-16 overflow-hidden truncate ${slugify(
        card.classe
      )}${className ? ` ${className}` : ""}`}
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
      </figure>
      <figcaption className="card__figcaption ">
        <p className="card__class ">[ {card.classe} ]</p>
        <p className="card__type ">
          {card.type}/ {card.element}
        </p>
      </figcaption>
      <p className="card__stats">
        ({card.pv}pv) ATK /{card.attack} DEF /{card.defense}
      </p>
    </article>
  );
}

// <p className="card__skill ">{card.skill}</p>
Card.propTypes = {
  card: CardType.isRequired,
  className: string,
};
Card.defaultProps = { ...defaultCard, className: null };
