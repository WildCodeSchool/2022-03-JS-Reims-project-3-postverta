import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import Hand from "./Hand";
import OpponentCard from "./OpponentCard";
import ArenaButtons from "./Ground/ArenaButtons";
import Ground from "./Ground/Ground";
import PseudoArea from "./Ground/PseudoArea";

export default function Arena() {
  const [drawPile, setDrawPile] = useState([]);
  const [hand, setHand] = useState([]);
  const { userData } = useUserData();
  const navigate = useNavigate();
  const [playedCards, setPlayedCards] = useState([]);

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

  const playCard = (cardId) => {
    const cardToPlay = hand.find((card) => card.id === cardId);
    setPlayedCards([...playedCards, cardToPlay]);
    setHand(hand.filter((card) => card.id !== cardId));
  };

  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <OpponentCard />
      <div className="h-50 m-1">
        <div className="-rotate-180">
          <PseudoArea />
          <Ground />
        </div>
        <ArenaButtons drawCard={drawCard} />
        <PseudoArea />
        <Ground playedCards={playedCards} />
      </div>
      <Hand hand={hand} playCard={playCard} />
    </div>
  );
}
