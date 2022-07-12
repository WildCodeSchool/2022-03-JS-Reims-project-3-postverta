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
        {playedCards[0] && <Card card={playedCards[0]} />}
      </div>
      <div className="card-container self-end">
        {playedCards[1] && <Card card={playedCards[1]} />}
      </div>
      <div className="card-container self-end">
        {playedCards[2] && <Card card={playedCards[2]} />}
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
