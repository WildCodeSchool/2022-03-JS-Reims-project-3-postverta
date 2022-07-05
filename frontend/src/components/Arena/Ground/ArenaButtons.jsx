import propTypes from "prop-types";

export default function ArenaButtons({ drawCard }) {
  return (
    <div className=" flex flex-row-reverse m-2 md:mb-16 md:mt-16">
      <button
        type="button"
        className="bg-black justify-end text-white font-bold py-1 px-2 m-10 rounded-full md:py-2 md:px-3"
      >
        Fin de Tour
      </button>
      <button
        type="button"
        className="bg-black justify-end text-white font-bold py-1 px-2 m-10 rounded-full md:py-2 md:px-3"
        onClick={drawCard}
      >
        Piocher
      </button>
    </div>
  );
}

ArenaButtons.propTypes = {
  drawCard: propTypes.func.isRequired,
};
