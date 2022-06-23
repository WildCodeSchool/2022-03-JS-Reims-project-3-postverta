import ReverseCard from "../../../assets/img/Dos-des-cartes.png";

export default function DeckArea() {
  return (
    <div className="grid grid-cols-1 justify-items-center place-content-center gap-12 mr-14">
      <div className="border-2 border-black h-14 w-10   " />
      <img
        alt="ReverseCard"
        src={ReverseCard}
        className="border-2 border-black h-14 w-10 bg-black"
      />
    </div>
  );
}
