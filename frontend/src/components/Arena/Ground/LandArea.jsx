import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";

export default function LandArea({ playedCards }) {
  return (
    <div className=" border-2 border-black h-20 w-16 md:h-32 md:w-24">
      {playedCards[0] && (
        <Card card={playedCards[0]} className="w-full h-full" />
      )}
    </div>
  );
}

LandArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
LandArea.defaultProps = {
  playedCards: [],
};
