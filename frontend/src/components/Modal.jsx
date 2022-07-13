import { ModalType, defaultModal } from "../prop-types/ModalType";
import "./Modal.css";

function Modal({ children, open }) {
  return (
    <details className="modal" open={open}>
      {children}
    </details>
  );
}
function Trigger({ children }) {
  return <summary className="modal-trigger">{children}</summary>;
}

Modal.Trigger = Trigger;

function Window({ children }) {
  return <div>{children}</div>;
}
Modal.Window = Window;

export default Modal;

Modal.propTypes = ModalType.modal.isRequired;
Trigger.propTypes = ModalType.trigger.isRequired;
Window.propTypes = ModalType.window.isRequired;
Modal.defaultProps = defaultModal.modal;
