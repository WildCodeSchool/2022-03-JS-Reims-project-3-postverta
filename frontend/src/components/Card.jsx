import "./Card.css";

export default function Card() {
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
    class: "terrain",
    starCount: "3",
  };

  return (
    <article className={`card ${card.class}`}>
      <header>
        <h1 className="card__name">{card.name}</h1>
        <span
          className="card__stars"
          style={{ paddingLeft: `${card.starCount}rem` }}
        >
          {card.starCount} star(s)
        </span>
      </header>
      <figure className="card__figure">
        <img
          className="card__img"
          src="https://picsum.photos/200"
          alt="Quentin"
        />
        <figcaption className="card__figcaption">
          <p className="card__class">
            [ {card.class} ({card.pv}pv) ]
          </p>
          <p className="card__type">
            {card.type}/ {card.element}
          </p>
          <p className="card__skill">{card.skill}</p>
          <p className="card__stats">
            ATK /{card.attack} DEF /{card.defense}
          </p>
        </figcaption>
      </figure>
    </article>
  );
}
