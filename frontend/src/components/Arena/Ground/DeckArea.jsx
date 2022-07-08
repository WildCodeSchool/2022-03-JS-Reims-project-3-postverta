import propTypes from "prop-types";
import ReverseCard from "../../../assets/img/Dos-des-cartes.png";

export default function DeckArea({ drawCard, drawPileLength }) {
  return drawPileLength > 0 ? (
    <button type="button" onClick={drawCard}>
      <img
        alt="ReverseCard"
        src={ReverseCard}
        className="border-2 border-black h-20 w-16 md:h-32 md:w-24"
      />
    </button>
  ) : (
    <div className="h-20 w-16 md:h-32 md:w-24" />
  );
}
DeckArea.propTypes = {
  drawCard: propTypes.func.isRequired,
  drawPileLength: propTypes.number,
};

DeckArea.defaultProps = {
  drawPileLength: 0,
};
