import propTypes from "prop-types";

export const CardType = propTypes.shape({
  card: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    classe: propTypes.string.isRequired,
    pv: propTypes.number,
    type: propTypes.string,
    element: propTypes.string,
    skill: propTypes.string,
    attack: propTypes.number,
    defense: propTypes.number,
    starCount: propTypes.number,
  }),
});

export const defaultCard = {
  card: {
    id: 0,
    name: "",
    classe: "",
    starCount: 0,
    pv: 0,
    type: "",
    element: "",
    skill: "",
    attack: 0,
    defense: 0,
  },
};
