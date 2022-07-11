import propTypes from "prop-types";
import "../Modal.css";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
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

export default function LeaveButton() {
  return (
    <div className=" h-1/4 flex gap-12 p-2 overflow-x-auto ">
      <Modal>
        <Modal.Trigger className="bg-black text-white font-bold py-2 px-4 my-4 rounded-full p-md:py-2 md:px-3">
          Quitter
        </Modal.Trigger>
        <Modal.Window>
          <h1 className="bg-white text-black p-2 rounded-xl">
            Etes- vous sûr de vouloir quitter ?
          </h1>
          <button
            onClick={() => {
              navigate("/deck");
            }}
            type="button"
            className="bg-white text-2xl text-black mt-4 p-2 rounded-xl border-4 border-amber-400"
          >
            Quitter
          </button>
          <button
            onClick={() => {}}
            type="button"
            className="bg-white text-2xl text-black mt-4 p-2 rounded-xl border-4 border-amber-400"
          >
            Rester
          </button>
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
