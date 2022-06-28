import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import { useUserData } from "../context/UserDataContext";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const { userData } = useUserData();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users/${
          userData.id
        }/cards`
      )
      .then((res) => res.data)
      .then((data) => {
        setCards(data);
      });
  }, []);

  const toggleCard = (card) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users/${
          userData.id
        }/cards/${card.id}`,
        { active: !card.active }
      )
      .then((response) => {
        if (response.status === 204) {
          setCards(
            cards.map((oldCard) =>
              oldCard.id === card.id
                ? { ...oldCard, active: !card.active }
                : oldCard
            )
          );
        }
      });
  };

  return (
    <>
      <ul
        className="cardlist flex justify-center items-center
    flex-row flex-wrap "
      >
        {cards.map((card) => (
          <label
            key={card.id}
            htmlFor={card.name}
            className="m-1 justify-center flex flex-col"
          >
            <Card card={card} />
            <input
              id={card.name}
              type="checkbox"
              checked={card.active}
              onChange={() => toggleCard(card)}
              className="hidden"
            />
          </label>
        ))}
      </ul>
      <p>
        {cards.filter((card) => card.active).map((card) => card).length} / 10
      </p>
    </>
  );
}
