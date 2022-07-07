import propTypes from "prop-types";
import DeckArea from "./DeckArea";
import GraveyardArea from "./GraveyardArea";
import MagicArea from "./MagicArea";
import MonsterArea from "./MonsterArea";
import { CardType } from "../../../prop-types/CardType";
import KeysArea from "./KeysArea";
import LandArea from "./LandArea";

export default function Ground({ playedCards, drawCard }) {
  return (
    <div className=" h-40 grid grid-cols-3 gap-8">
      <div className=" flex flex-col justify-center items-center gap-16">
        <GraveyardArea />
        <LandArea playedCards={playedCards.landCards} />
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <MonsterArea playedCards={playedCards.monsterCards} />
        <MagicArea playedCards={playedCards.magicCards} />
      </div>
      <div className=" flex flex-col justify-center items-center gap-16">
        <KeysArea playedCards={playedCards.keyCards} />
        <DeckArea drawCard={drawCard} />
      </div>
    </div>
  );
}

Ground.propTypes = {
  playedCards: propTypes.shape({
    monsterCards: propTypes.arrayOf(CardType).isRequired,
    magicCards: propTypes.arrayOf(CardType).isRequired,
    keyCards: propTypes.arrayOf(CardType).isRequired,
    landCards: propTypes.arrayOf(CardType).isRequired,
  }).isRequired,
  drawCard: propTypes.func.isRequired,
};
