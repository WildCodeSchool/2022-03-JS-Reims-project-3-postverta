import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import Hand from "./Hand";
import OpponentCard from "./OpponentCard";
import TurnButton from "./Ground/TurnButton";
import Ground from "./Ground/Ground";

export default function Arena() {
  const [drawPile, setDrawPile] = useState([]);
  const [hand, setHand] = useState([]);
  const { userData } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userData.id}/cards?active=true`)
      .then((res) => res.data)
      .then((data) => {
        if (data.length < 10) {
          // alert("You need at least 10 cards in your hand");
          navigate("/deck");
        }

        const shuffledDeck = data.sort(() => Math.random() - 0.5);

        setHand(shuffledDeck.slice(0, 5));
        setDrawPile(shuffledDeck.slice(5));
      });
  }, []);

  const drawCard = () => {
    setHand([...hand, drawPile[0]]);
    setDrawPile(drawPile.slice(1));
  };

  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <OpponentCard />
      <div className="h-96 m-2">
        <div className="-rotate-180">
          <Ground />
        </div>
        <button
          type="button"
          className="bg-black justify-end text-white font-bold py-1 px-2 m-3 rounded-full"
          onClick={drawCard}
        >
          Piocher
        </button>
        <TurnButton />
        <Ground />
      </div>
      <Hand hand={hand} />
    </div>
  );
}
