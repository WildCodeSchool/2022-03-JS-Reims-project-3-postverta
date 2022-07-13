import propTypes from "prop-types";

export default function PseudoArea({ pseudo }) {
  return (
    <div className="flex justify-items-center place-content-center gap-2 text-lg text-white font-bold">
      <p>{pseudo} :</p>
      <p>40 pv </p>
    </div>
  );
}

PseudoArea.propTypes = {
  pseudo: propTypes.string.isRequired,
};
