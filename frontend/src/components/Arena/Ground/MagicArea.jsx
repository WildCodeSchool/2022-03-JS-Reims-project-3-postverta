import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";

export default function MagicArea({ playedCards }) {
  return (
    <>
      <div className="card-container self-start">
        {playedCards[0] && <Card card={playedCards[0]} />}
      </div>
      <div className="card-container self-start">
        {playedCards[1] && <Card card={playedCards[1]} />}
      </div>
      <div className="card-container self-start">
        {playedCards[2] && <Card card={playedCards[2]} />}
      </div>
    </>
  );
}

MagicArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
MagicArea.defaultProps = {
  playedCards: [],
};
