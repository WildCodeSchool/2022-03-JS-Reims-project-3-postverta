import CardList from "../components/CardList";

export default function Deck() {
  return (
    <div className="bg-[url('./assets/img/dream-deck.jpg')]  min-h-screen bg-repeat bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center">Deck</p>
      <CardList />
    </div>
  );
}
