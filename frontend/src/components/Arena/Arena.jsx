import { useState, useEffect } from "react";
import { useTimer } from "use-timer";
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

const minute = (time) => {
  return Math.floor(time / 60);
};

const second = (time) => (time % 60).toString().padStart(2, "0");

const initialHandIds = createHand(shuffleDeck);

export default function Arena() {
  const [hand, setHand] = useState([]);
  const [playedCards, setPlayedCards] = useState([]);

  const { time, reset, start } = useTimer({
    initialTime: 75,
    timerType: "DECREMENTAL",
    endTime: 0,
    autostart: true,
    onTimeOver: () => {
      reset();
      start();
    },
  });

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
      <div className="h-50 m-1">
        <div className="-rotate-180">
          <PseudoArea />
          <Ground />
        </div>
        <ArenaButtons drawCard={drawCard} />
        <p>
          {minute(time)}:{second(time)}
        </p>
        <PseudoArea />
        <Ground playedCards={playedCards} />
      </div>
      <Hand hand={hand} playCard={playCard} />
    </div>
  );
}
