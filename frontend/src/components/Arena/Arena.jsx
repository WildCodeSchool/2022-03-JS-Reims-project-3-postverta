import { useState, useEffect } from "react";
import axios from "axios";
import Hand from "./Hand";
import OpponentCard from "./OpponentCard";
import TurnButton from "./Ground/TurnButton";
import Ground from "./Ground/Ground";

const deck = [1, 31, 26, 21, 23, 11, 3, 7, 10, 12, 28, 30];
const shuffleDeck = deck.sort(() => Math.random() - 0.5);
const pickCardId = () => shuffleDeck.shift();

const createHand = (cards) => {
  const hand = [];
  for (let i = 0; i < 5; i += 1) {
    hand.push(cards.shift());
  }
  return hand;
};

const initialHandIds = createHand(shuffleDeck);

export default function Arena() {
  const [hand, setHand] = useState([]);
  const [playedCards, setPlayedCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => res.data)
      .then((cards) => {
        setHand(cards.filter((card) => initialHandIds.includes(card.id)));
      });
  }, []);

  const drawCard = () => {
    const cardId = pickCardId();
    axios
      .get(`http://localhost:5000/cards/${cardId}`)
      .then((res) => res.data)
      .then((card) => {
        setHand([...hand, card]);
      });
  };

  const playCard = (cardId) => {
    const cardToPlay = hand.find((card) => card.id === cardId);
    setPlayedCards([...playedCards, cardToPlay]);
    setHand(hand.filter((card) => card.id !== cardId));
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
        <Ground playedCards={playedCards} />
      </div>
      <Hand hand={hand} playCard={playCard} />
    </div>
  );
}
