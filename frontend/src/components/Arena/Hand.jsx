import propTypes from "prop-types";
import Card from "../Card";
import Modal from "../Modal";

export default function Hand({ hand, playCard }) {
  return (
    <div className="h-1/4 flex gap-4 overflow-x-auto mt-auto">
      {hand.map((card) => (
        <Modal key={card.id} open={card.open ?? false}>
          <Modal.Trigger
            className="border-2 m-2 mr-8
         h-max text-xs"
          >
            <Card card={card} />
          </Modal.Trigger>
          <Modal.Window>
            <Card card={card} showDetails />
            <button
              onClick={() => {
                playCard(card);
              }}
              type="button"
              className="bg-white text-2xl text-black mt-4 p-2 rounded-xl"
            >
              Poser
            </button>
          </Modal.Window>
        </Modal>
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
