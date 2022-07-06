import propTypes from "prop-types";
import Card from "../Card";

export default function Hand({ hand, playCard }) {
  return (
    <div className=" h-1/4 flex  overflow-x-auto ">
      {hand.map((card) => (
        <button
          key={card.id}
          onClick={() => playCard(card.id)}
          type="button"
          className="border-2 m-2 mr-8
         h-max text-xs"
        >
          <Card key={card.id} card={card} />
        </button>
      ))}
    </div>
  );
}

Hand.propTypes = {
  hand: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      classe: propTypes.string.isRequired,
      pv: propTypes.number,
      type: propTypes.string,
      element: propTypes.string,
      skill: propTypes.string,
      attack: propTypes.number,
      defense: propTypes.number,
      starCount: propTypes.number,
    })
  ).isRequired,
  playCard: propTypes.func.isRequired,
};
