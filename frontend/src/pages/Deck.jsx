import CardList from "../components/CardList";

export default function Deck() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-deck.jpg')] bg-repeat bg-gray-500 bg-blend-darken flex flex-col flex-1">
      <p className="bg-white bg-opacity-70 text-center">Deck</p>
      <CardList />
    </div>
  );
}
