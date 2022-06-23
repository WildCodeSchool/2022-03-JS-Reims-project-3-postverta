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

  return (
    <ul
      className="cardlist flex justify-center items-center
    flex-row flex-wrap "
    >
      {cards.map((card) => (
        <li key={card.id} className="m-1 justify-center flex flex-col">
          <Card card={card} />
          <button
            type="button"
            className="bg-white font-semibold py-1 px-2 border border-black rounded-2xl mt-1 align-center"
          >
            Add
          </button>
        </li>
      ))}
    </ul>
  );
}
