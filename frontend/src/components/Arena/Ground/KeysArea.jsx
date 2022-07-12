import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";

export default function KeysArea({ playedCards }) {
  return (
    <div className="card-container self-start">
      {playedCards[0] && <Card card={playedCards[0]} />}
    </div>
  );
}

KeysArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
KeysArea.defaultProps = {
  playedCards: [],
};
