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
            className={`m-1 justify-center flex flex-col w-1/4 ${
              card.active
                ? "border border-2 shadow-2xl shadow-white"
                : " grayscale"
            }`}
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
      <div className="flex-col justify-center items-center flex m-1">
        <p className="bg-white w-1/4 mb-12 mt-4 text-center">
          {cardsOnHand} / 15
        </p>
        {cardsOnHand !== 15 ? (
          <p className="bg-white p-2">Choisis 15 cartes</p>
        ) : (
          <Link to="/game" className="bg-white p-1">
            Aller dans l'arène
          </Link>
        )}
      </div>
    </>
  );
}
