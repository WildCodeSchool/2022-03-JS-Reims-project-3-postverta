import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards/")
      .then((res) => res.data)
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <ul
      className="cardlist flex justify-center items-center
    flex-col "
    >
      {cards.map((card) => (
        <li key={card.id} className="m-2 ">
          <Card card={card} />
          <div className="flex justify-center items-center flex-row m-3">
            <button
              type="button"
              className="bg-white font-semibold py-2 px-4 border border-black rounded-3xl m-1"
            >
              Add to Deck
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
