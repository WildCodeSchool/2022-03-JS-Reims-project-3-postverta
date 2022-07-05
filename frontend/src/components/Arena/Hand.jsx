import propTypes from "prop-types";
import Card from "../Card";
import { CardType } from "../../prop-types/CardType";

export default function Hand({ hand, playCard }) {
  return (
    <div className=" h-1/4 flex  overflow-x-auto">
      {hand.map((card) => (
        <button key={card.id} type="button" onClick={() => playCard(card.id)}>
          <div
            className="border-2 m-1 mr-8
         h-max text-xs "
          >
            <Card key={card.id} card={card} />
          </div>
        </button>
      ))}
    </div>
  );
}

Hand.propTypes = {
  hand: propTypes.arrayOf(CardType.isRequired).isRequired,
  playCard: propTypes.func.isRequired,
};
