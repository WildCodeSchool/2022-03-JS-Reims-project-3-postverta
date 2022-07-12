import Card from "@components/Card";
import propTypes from "prop-types";
import { CardType } from "../../../prop-types/CardType";
import CardDetails from "../../CardDetails";
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
    <div className="flex justify-center items-center gap-2">
      <div className="border-2 border-black h-20 w-16 md:h-32 md:w-24">
        {playedCards[0] && (
          <Modal
            key={playedCards[0].id}
            open={playedCards[0].open ?? false}
            className="w-full h-full"
          >
            <Modal.Trigger>
              <Card card={playedCards[0]} className="w-full h-full" />
            </Modal.Trigger>
            <Modal.Window>
              <CardDetails card={playedCards[0]} className="" />
            </Modal.Window>
          </Modal>
        )}
      </div>
      <div className="border-2 border-black h-20 w-16 md:h-32 md:w-24">
        {playedCards[1] && (
          <Modal
            key={playedCards[1].id}
            open={playedCards[1].open ?? false}
            className="w-full h-full"
          >
            <Modal.Trigger>
              <Card card={playedCards[1]} className="w-full h-full" />
            </Modal.Trigger>
            <Modal.Window>
              <CardDetails card={playedCards[1]} className="" />
            </Modal.Window>
          </Modal>
        )}
      </div>
      <div className="border-2 border-black h-20 w-16 md:h-32 md:w-24">
        {playedCards[2] && (
          <Modal
            key={playedCards[2].id}
            open={playedCards[2].open ?? false}
            className="w-full h-full"
          >
            <Modal.Trigger>
              <Card card={playedCards[2]} className="w-full h-full" />
            </Modal.Trigger>
            <Modal.Window>
              <CardDetails card={playedCards[2]} className="" />
            </Modal.Window>
          </Modal>
        )}
      </div>
    </div>
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
