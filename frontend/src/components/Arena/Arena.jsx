import { useState, useEffect } from "react";
import axios from "axios";
import Hand from "./Hand";
import OpponentCard from "./OpponentCard";
import ArenaButtons from "./Ground/ArenaButtons";
import Ground from "./Ground/Ground";
import PseudoArea from "./Ground/PseudoArea";

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
        <Ground />
      </div>
      <Hand hand={hand} />
    </div>
  );
}
