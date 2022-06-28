export default function TurnButton() {
  return (
    <div className=" flex flex-row-reverse m-2 md:mb-16 md:mt-16">
      <button
        type="button"
        className="bg-black justify-end text-white font-bold py-1 px-2 m-10 rounded-full md:py-2 md:px-3"
      >
        <h1 className="md:text-xl">Fin de Tour</h1>
      </button>
    </div>
  );
}
