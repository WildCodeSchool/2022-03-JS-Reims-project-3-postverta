const cardlist = [
  { id: 1, name: "Card 1" },
  { id: 2, name: "Card 2" },
  { id: 3, name: "Card 3" },
  { id: 4, name: "Card 4" },
  { id: 5, name: "Card 5" },
];

export default function CardList() {
  return (
    <ul className="cardlist">
      {cardlist.map((card) => (
        <li key={card.id}>{card.name}</li>
      ))}
    </ul>
  );
}
