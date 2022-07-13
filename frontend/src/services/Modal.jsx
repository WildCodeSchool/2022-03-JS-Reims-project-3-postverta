import propTypes from "prop-types";
import "./Modal.css";

export function Modal({ children }) {
  return <details className="modal">{children}</details>;
}

export function Trigger({ children }) {
  return <summary className="modal-trigger">{children}</summary>;
}

Modal.Trigger = Trigger;

export function Window({ children, className }) {
  return <div className={className}>{children}</div>;
}

Modal.Window = Window;

Modal.propTypes = {
  children: propTypes.node.isRequired,
};
Trigger.propTypes = {
  children: propTypes.node.isRequired,
};
Window.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

Window.defaultProps = {
  className: "modal-window",
};
