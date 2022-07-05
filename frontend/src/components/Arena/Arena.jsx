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

const initialHandIds = createHand(shuffleDeck);

export default function Arena() {
  const [hand, setHand] = useState([]);

  // bloque le timer quand le joueur clique sur le bouton fin de tour
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

  const minute = () => {
    return Math.floor(time / 60);
  };

  const second = () => {
    return time % 60 < 10 ? `0${time % 60}` : time % 60;
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
          {minute()}:{second()}
        </p>
        <PseudoArea />
        <Ground />
      </div>
      <Hand hand={hand} />
    </div>
  );
}
