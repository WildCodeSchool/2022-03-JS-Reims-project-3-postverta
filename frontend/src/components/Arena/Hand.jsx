import propTypes from "prop-types";
import Card from "../Card";
import CardDetails from "../CardDetails";
import "../Modal.css";

function Modal({ children }) {
  return <details className="modal">{children}</details>;
}

function Trigger({ children }) {
  return <summary className="modal-trigger">{children}</summary>;
}

Modal.Trigger = Trigger;

function Window({ children }) {
  return <div className="modal-window">{children}</div>;
}

Modal.Window = Window;

export default function Hand({ hand, playCard }) {
  return (
    <div className=" h-1/4 flex  overflow-x-auto ">
      {hand.map((card) => (
        <Modal>
          <Modal.Trigger
            key={card.id}
            className="border-2 m-2 mr-8
         h-max text-xs"
          >
            <Card key={card.id} card={card} />
          </Modal.Trigger>
          <Modal.Window>
            <CardDetails key={card.id} card={card} className="" />
            <button
              onClick={() => playCard(card.id)}
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

Modal.propTypes = {
  children: propTypes.node.isRequired,
};

Trigger.propTypes = {
  children: propTypes.node.isRequired,
};

Window.propTypes = {
  children: propTypes.node.isRequired,
};
