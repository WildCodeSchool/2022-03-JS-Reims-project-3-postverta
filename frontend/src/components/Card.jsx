const card = {
  id: "1",
  name: "Quentin",
};

export default function Card() {
  return (
    <div className="card">
      <h5 className="card-name">{card.name}</h5>
      <h5 className="card-id">{card.id}</h5>
    </div>
  );
}
