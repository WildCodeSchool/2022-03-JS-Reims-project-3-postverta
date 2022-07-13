import propTypes from "prop-types";

export const ModalType = propTypes.shape({
  modal: propTypes.shape({
    open: propTypes.bool,
    children: propTypes.node.isRequired,
  }),
  trigger: propTypes.shape({
    children: propTypes.node.isRequired,
  }),
  window: propTypes.shape({
    children: propTypes.node.isRequired,
  }),
});

export const defaultModal = {
  modal: {
    open: false,
  },
};
