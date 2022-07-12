import propTypes from "prop-types";
import DeckArea from "./DeckArea";
import GraveyardArea from "./GraveyardArea";
import MagicArea from "./MagicArea";
import MonsterArea from "./MonsterArea";
import { CardType } from "../../../prop-types/CardType";
import KeysArea from "./KeysArea";
import LandArea from "./LandArea";

export default function Ground({ playedCards, drawCard, drawPileLength }) {
  return (
    <div className="h-60 md:h-80 grid grid-cols-5 gap-4 mb-4">
      <KeysArea playedCards={playedCards.keyCards} />
      <MonsterArea playedCards={playedCards.monsterCards} />
      <GraveyardArea />
      <LandArea playedCards={playedCards.landCards} />
      <MagicArea playedCards={playedCards.magicCards} />
      <DeckArea drawCard={drawCard} drawPileLength={drawPileLength} />
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
  drawPileLength: propTypes.number,
};

Ground.defaultProps = {
  drawPileLength: 0,
};
