import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";

export default function LandArea({ playedCards }) {
  return (
    <div className="card-container self-end">
      {playedCards[0] && <Card card={playedCards[0]} />}
    </div>
  );
}

LandArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
LandArea.defaultProps = {
  playedCards: [],
};
