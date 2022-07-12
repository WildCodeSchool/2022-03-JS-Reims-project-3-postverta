import propTypes from "prop-types";
import Card from "../../Card";
import { CardType } from "../../../prop-types/CardType";
import "../../Modal.css";

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

export default function MonsterArea({ playedCards }) {
  return (
    <>
      <div className="card-container self-end">
        {playedCards[0] && (
          <Modal key={playedCards[0].id} open={playedCards[0].open ?? false}>
            <Modal.Trigger
              className="border-2 m-2 mr-8
         h-max text-xs"
            >
              <Card card={playedCards[0]} />
            </Modal.Trigger>
            <Modal.Window>
              <Card card={playedCards[0]} className="" showDetails />
            </Modal.Window>
          </Modal>
        )}
      </div>
      <div className="card-container self-end">
        {playedCards[1] && (
          <Modal key={playedCards[1].id} open={playedCards[1].open ?? false}>
            <Modal.Trigger
              className="border-2 m-2 mr-8
         h-max text-xs"
            >
              <Card card={playedCards[1]} />
            </Modal.Trigger>
            <Modal.Window>
              <Card card={playedCards[1]} className="" showDetails />
            </Modal.Window>
          </Modal>
        )}
      </div>
      <div className="card-container self-end">
        {playedCards[2] && (
          <Modal key={playedCards[2].id} open={playedCards[2].open ?? false}>
            <Modal.Trigger
              className="border-2 m-2 mr-8
         h-max text-xs"
            >
              <Card card={playedCards[2]} />
            </Modal.Trigger>
            <Modal.Window>
              <Card card={playedCards[2]} className="" showDetails />
            </Modal.Window>
          </Modal>
        )}
      </div>
    </>
  );
}

MonsterArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType).isRequired,
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
