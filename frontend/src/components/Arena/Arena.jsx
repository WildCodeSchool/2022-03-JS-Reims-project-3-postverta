import { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import Hand from "./Hand";
import OpponentCard from "./OpponentCard";
import ArenaButtons from "./Ground/ArenaButtons";
import Ground from "./Ground/Ground";
import PseudoArea from "./Ground/PseudoArea";

const minute = (time) => {
  return Math.floor(time / 60);
};

const second = (time) => (time % 60).toString().padStart(2, "0");

export default function Arena() {
  const [drawPile, setDrawPile] = useState([]);
  const [hand, setHand] = useState([]);
  const { userData } = useUserData();
  const navigate = useNavigate();
  const [playedCards, setPlayedCards] = useState({
    monsterCards: [],
    magicCards: [],
    keyCards: [],
    landCards: [],
  });

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
      .get(`http://localhost:5000/users/${userData.id}/cards?active=true`)
      .then((res) => res.data)
      .then((data) => {
        if (data.length !== 10) {
          navigate("/deck");
        }

        const shuffledDeck = data.sort(() => Math.random() - 0.5);

        setHand(shuffledDeck.slice(0, 5));
        setDrawPile(shuffledDeck.slice(5));
      });
  }, []);

  const drawCard = () => {
    if (drawPile.length > 0) {
      setHand([...hand, drawPile[0]]);
      setDrawPile(drawPile.slice(1));
    }
  };

  const playCard = (cardToPlay) => {
    let ok = false;
    let area = null;

    if (cardToPlay.classe.startsWith("Gardien")) {
      if (playedCards.monsterCards.length < 3 && cardToPlay.starCount < 3) {
        ok = true;
        area = "monsterCards";
      }
    } else if (cardToPlay.classe === "Magie" || cardToPlay.classe === "Piège") {
      if (playedCards.magicCards.length < 3) {
        ok = true;
        area = "magicCards";
      }
    } else if (cardToPlay.classe === "Clé") {
      if (playedCards.keyCards.length < 1) {
        ok = true;
        area = "keyCards";
      }
    } else if (cardToPlay.classe === "Terrain") {
      if (playedCards.landCards.length < 1) {
        ok = true;
        area = "landCards";
      }
    }

    if (ok) {
      setPlayedCards({
        ...playedCards,
        [area]: [...playedCards[area], cardToPlay],
      });

      setHand(hand.filter((card) => card.id !== cardToPlay.id));
    } else {
      alert("You can't play this card");
    }
  };

  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <OpponentCard />
      <div className="h-50">
        <div className="-rotate-180">
          <PseudoArea />
          <Ground
            playedCards={{
              monsterCards: [],
              magicCards: [],
              keyCards: [],
              landCards: [],
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <ArenaButtons />
          <p
            className="ml-8
          "
          >
            {minute(time)}:{second(time)}
          </p>
        </div>
        <PseudoArea />
        <Ground playedCards={playedCards} drawCard={drawCard} />
      </div>
      <Hand hand={hand} playCard={playCard} />
    </div>
  );
}
