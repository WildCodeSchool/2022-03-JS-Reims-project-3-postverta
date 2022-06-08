import "./Hand.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

export default function Hand() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => res.data)
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="hands">
      <ul className="hand_card">
        {cards.map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
