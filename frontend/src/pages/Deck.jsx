import propTypes from "prop-types";
import RulesModal from "../components/RulesModal";
import CardList from "../components/CardList";
import { Modal, Trigger, Window } from "../services/Modal";

export default function Deck() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-deck.jpg')] bg-repeat bg-gray-500 bg-blend-darken flex flex-col flex-1">
      <p className="bg-white bg-opacity-70 text-center">Deck</p>
      <CardList />
      <Modal>
        <Modal.Trigger>
          <div className="flex justify-center">
            <p className="bg-white w-24 text-2xl text-center text-black mt-2 p-1">
              Règles
            </p>
          </div>
        </Modal.Trigger>
        <Modal.Window className="modal-window-rules">
          <RulesModal />
        </Modal.Window>
      </Modal>
    </div>
  );
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
};

Trigger.propTypes = {
  children: propTypes.node.isRequired,
};

Window.propTypes = {
  children: propTypes.node.isRequired,
};
