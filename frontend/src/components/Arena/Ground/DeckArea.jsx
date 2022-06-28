import ReverseCard from "../../../assets/img/Dos-des-cartes.png";

export default function DeckArea() {
  return (
    <div className="grid grid-cols-1 justify-items-center place-content-center gap-16 mr-2">
      {/* defausse */}
      <div className="border-2 border-black h-20 w-14   " />
      {/* deck */}
      <img
        alt="ReverseCard"
        src={ReverseCard}
        className="border-2 border-black h-20 w-14 bg-black"
      />
    </div>
  );
}
