import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const cardsOnHand = cards
    .filter((card) => card.active)
    .map((card) => card).length;

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
            className={
              card.active
                ? "m-1 justify-center flex flex-col"
                : "m-1 justify-center flex flex-col grayscale"
            }
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
      <p className="bg-white">{cardsOnHand} / 10</p>
      <div className="inline justify-center flex m-1">
        {cardsOnHand !== 10 ? (
          <p className="bg-white">Choisis 10 cartes</p>
        ) : (
          <Link to="/game" className="bg-white p-1">
            Aller dans l'arène
          </Link>
        )}
      </div>
    </>
  );
}
