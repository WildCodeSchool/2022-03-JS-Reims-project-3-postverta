import propTypes from "prop-types";
import Card from "../../Card";
import { CardType } from "../../../prop-types/CardType";
import Modal from "../../Modal";

export default function MagicArea({ playedCards }) {
  return (
    <>
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
      <div className="card-container self-start">
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
      <div className="card-container self-start">
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

MagicArea.propTypes = {
  playedCards: propTypes.arrayOf(CardType),
};
MagicArea.defaultProps = {
  playedCards: [],
};
