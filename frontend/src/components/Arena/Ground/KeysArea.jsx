import propTypes from "prop-types";
import Card from "../../Card";
import { CardType } from "../../../prop-types/CardType";
import Modal from "../../Modal";

export default function KeysArea({ playedCards }) {
  return (
    <div className="card-container self-start">
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
  );
}

KeysArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
KeysArea.defaultProps = {
  playedCards: [],
};
