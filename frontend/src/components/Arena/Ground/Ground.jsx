import propTypes from "prop-types";
import DeckArea from "./DeckArea";
import GraveyardArea from "./GraveyardArea";
import MagicArea from "./MagicArea";
import MonsterArea from "./MonsterArea";
import { CardType } from "../../../prop-types/CardType";
import Card from "../../Card";

export default function Ground({ playedCards }) {
  return (
    <div className=" h-40 flex justify-between ml-4">
      <GraveyardArea />
      <div className="w-50  grid grid-cols-3 justify-items-center place-content-center gap-4">
        <MonsterArea />
        <MagicArea />
        {playedCards.map((card) => (
          <Card
            className="border-2 border-black h-14 w-10"
            key={card.id}
            card={card}
          />
        ))}
      </div>
      <DeckArea />
    </div>
  );
}

Ground.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
Ground.defaultProps = {
  playedCards: [],
};
