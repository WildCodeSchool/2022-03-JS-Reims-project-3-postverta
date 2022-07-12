import propTypes from "prop-types";
import ReverseCard from "../../../assets/img/Dos-des-cartes.png";

export default function DeckArea({ drawCard, drawPileLength }) {
  return (
    drawPileLength > 0 && (
      <button
        className="card-container self-end"
        type="button"
        onClick={drawCard}
      >
        <img className="w-full h-full" alt="ReverseCard" src={ReverseCard} />
      </button>
    )
  );
}
DeckArea.propTypes = {
  drawCard: propTypes.func.isRequired,
  drawPileLength: propTypes.number,
};

DeckArea.defaultProps = {
  drawPileLength: 0,
};
