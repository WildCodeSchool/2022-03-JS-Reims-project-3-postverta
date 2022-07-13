import { bool, node } from "prop-types";
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
  return <div className="modal-window">{children}</div>;
}
Modal.Window = Window;

Modal.propTypes = {
  children: node.isRequired,
  open: bool,
};
Trigger.propTypes = {
  children: node.isRequired,
};
Window.propTypes = {
  children: node.isRequired,
};

Modal.defaultProps = {
  open: false,
};

export default Modal;
