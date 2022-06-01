import "./Card.css";

const card = {
  id: 1,
  name: "Maître Loup",
  attack: 5,
  defense: 8,
  pv: 10,
  skill:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam, quidem, doloremque, quas, quos, doloribus, voluptate, eum, quia, eius. ",
  type: "oiseau",
  element: "feu",
  class: "gardien normal",
  starCount: 3,
};

export default function Card() {
  return (
    <div className="card">
      <figure className="card__figure">
        <h2>{card.name}</h2>
        <img src="https://picsum.photos/200" alt="Quentin" />
        <figcaption className="card__figcaption">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </figcaption>
      </figure>
    </div>
  );
}
