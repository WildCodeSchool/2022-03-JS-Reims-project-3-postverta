import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserDataContext";
import Hand from "./Hand";
import ArenaButtons from "./Ground/ArenaButtons";
import Ground from "./Ground/Ground";
import PseudoArea from "./Ground/PseudoArea";
import OpponnentPseudo from "./Ground/OpponentPseudo";

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
        if (data.length !== 15) {
          navigate("/deck");
        }

        const shuffledDeck = data.sort(() => Math.random() - 0.5);

        setHand(shuffledDeck.slice(0, 5));
        setDrawPile(shuffledDeck.slice(5));
      });
  }, []);

  const drawCard = () => {
    if (drawPile.length > 0) {
      setHand([...hand, { ...drawPile[0], open: true }]);
      setDrawPile(drawPile.slice(1));
    }
  };

  const playCard = (cardToPlay) => {
    let ok = false;
    let area = null;

    if (cardToPlay.classe.startsWith("Gardien")) {
      switch (cardToPlay.classe.startsWith("Gardien")) {
        case playedCards.monsterCards.length < 3 && cardToPlay.starCount < 3:
          ok = true;
          area = "monsterCards";
          break;
        case playedCards.monsterCards.length >= 3:
          toast.error("Tu ne peux pas jouer plus de 3 monstres");
          break;
        case cardToPlay.starCount >= 3:
          toast.error("Cette carte a trop d'étoiles pour être jouée");
          break;
        default:
          toast.error("Cette carte n'est pas jouable");
      }
    }

    if (cardToPlay.classe === "Magie" || cardToPlay.classe === "Piège") {
      switch (cardToPlay.classe === "Magie" || cardToPlay.classe === "Piège") {
        case playedCards.magicCards.length < 3:
          ok = true;
          area = "magicCards";
          break;
        case playedCards.magicCards.length >= 3:
          toast.error("Tu ne peux pas jouer plus de 3 cartes magiques");
          break;
        default:
          toast.error("Cette carte n'est pas jouable");
      }
    }

    if (cardToPlay.classe === "Clé") {
      switch (cardToPlay.classe === "Clé") {
        case playedCards.keyCards.length < 1:
          ok = true;
          area = "keyCards";
          break;
        case playedCards.keyCards.length >= 1:
          toast.error("Tu ne peux pas jouer plus de 1 carte clé");
          break;
        default:
          toast.error("Cette carte n'est pas jouable");
      }
    }

    if (cardToPlay.classe === "Terrain") {
      switch (cardToPlay.classe === "Terrain") {
        case playedCards.landCards.length < 1:
          ok = true;
          area = "landCards";
          break;
        case playedCards.landCards.length >= 1:
          toast.error("Tu ne peux pas jouer plus de 1 carte terrain");
          break;
        default:
          toast.error("Cette carte n'est pas jouable");
      }
    }

    if (ok) {
      setPlayedCards({
        ...playedCards,
        [area]: [...playedCards[area], cardToPlay],
      });

      setHand(hand.filter((card) => card.id !== cardToPlay.id));
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col">
      {/* <OpponentCard /> */}
      <div className="h-50">
        <div className="-rotate-180">
          <Ground
            playedCards={{
              monsterCards: [],
              magicCards: [],
              keyCards: [],
              landCards: [],
            }}
          />
        </div>
        <OpponnentPseudo />
        <div className="flex justify-center items-center">
          <Link
            to="/deck"
            className="bg-black text-white font-bold py-2 px-4 my-4 rounded-full p-md:py-2 md:px-3"
          >
            Quitter
          </Link>
          <p className="m-4 text-center text-white font-bold">
            {minute(time)}:{second(time)}
          </p>
          <ArenaButtons />
        </div>
        <PseudoArea />
        <Ground
          playedCards={playedCards}
          drawCard={drawCard}
          drawPileLength={drawPile.length}
        />
      </div>
      <Hand hand={hand} playCard={playCard} />
      <ToastContainer />
    </div>
  );
}
