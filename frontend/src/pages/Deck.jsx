import propTypes from "prop-types";
import RulesModal from "../components/RulesModal";
import CardList from "../components/CardList";
import "../components/Modal.css";

function Modal({ children }) {
  return <details className="modal">{children}</details>;
}

function Trigger({ children }) {
  return <summary className="modal-trigger">{children}</summary>;
}

Modal.Trigger = Trigger;

function Window({ children }) {
  return <div className="modal-window-rules">{children}</div>;
}

Modal.Window = Window;

export default function Deck() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-deck.jpg')] bg-repeat bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center">Deck</p>
      <CardList />
      <Modal>
        <Modal.Trigger>
          <button
            type="button"
            className="bg-white text-2xl text-black mt-4 p-2 rounded-xl"
          >
            Rules
          </button>
        </Modal.Trigger>
        <Modal.Window>
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
