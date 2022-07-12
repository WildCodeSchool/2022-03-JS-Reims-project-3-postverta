import { bool, string } from "prop-types";
import { defaultCard, CardType } from "../prop-types/CardType";
import slugify from "../services/slugify";
import "./Card.css";

export default function Card({ card, className, showDetails }) {
  return (
    <article
      className={`card ${slugify(card.classe)}${
        className ? ` ${className}` : ""
      }${showDetails ? " p-4" : ""}`}
    >
      <header>
        {showDetails && <h1 className="card__name  truncate ">{card.name}</h1>}
        <span
          className={`card__stars${!showDetails ? " w-auto bg-no-repeat" : ""}`}
          style={{
            paddingLeft: `${
              // eslint-disable-next-line no-nested-ternary
              showDetails ? card.starCount : card.starCount > 0 ? 1 : 0
            }rem`,
          }}
        >
          {card.starCount > 1 && `* ${card.starCount}`}
        </span>
      </header>
      <figure className="card__figure ">
        <img
          className={`card__img${showDetails ? " mb-4" : ""}`}
          src={`${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/assets/images/${card.id}.png`}
          alt={card.name}
        />
        {showDetails && (
          <figcaption className="card__figcaption ">
            <p className="card__class ">[ {card.classe} ]</p>
            <p className="card__type ">
              {card.type}/ {card.element}
            </p>
            <p className="card__skill ">{card.skill}</p>
          </figcaption>
        )}
      </figure>
      {showDetails && (
        <p className="card__stats">
          ({card.pv}pv) ATK /{card.attack} DEF /{card.defense}
        </p>
      )}
    </article>
  );
}

Card.propTypes = {
  card: CardType.isRequired,
  className: string,
  showDetails: bool,
};
Card.defaultProps = { ...defaultCard, className: null, showDetails: false };
