import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";

export default function MagicArea({ playedCards }) {
  return (
    <div className="flex justify-center items-center">
      <div className=" border-2 border-black h-20 w-16 md:h-32 md:w-24 z-0">
        {playedCards[0] && <Card card={playedCards[0]} />}
      </div>
      <div className=" border-2 border-black h-20 w-16 md:h-32 md:w-24 z-0">
        {playedCards[1] && <Card card={playedCards[1]} />}
      </div>
      <div className=" border-2 border-black h-20 w-16 md:h-32 md:w-24 z-0">
        {playedCards[2] && <Card card={playedCards[2]} />}
      </div>
    </div>
  );
}

MagicArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
MagicArea.defaultProps = {
  playedCards: [],
};
