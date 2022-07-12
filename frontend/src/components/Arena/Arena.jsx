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

const minute = (time) => {
  return Math.floor(time / 60);
};

const second = (time) => (time % 60).toString().padStart(2, "0");

export default function Arena() {
  const [drawPile, setDrawPile] = useState([]);
  const [hand, setHand] = useState([]);
  const { userData } = useUserData();
  const navigate = useNavigate();
  const [dataReady, setDataReady] = useState(false);
  const [playedCards, setPlayedCards] = useState({
    monsterCards: [],
    magicCards: [],
    keyCards: [],
    landCards: [],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  return dataReady ? (
    <div className="p-4 min-h-screen flex flex-col">
      {/* <OpponentCard /> */}
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
  ) : (
    <section className="flex flex-col justify-center items-center min-h-screen ">
      <svg
        role="status"
        className="w-20 h-20 mr-2 text-white animate-spin dark:text-gray-600 fill-black text-center"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <p className="text-white text-4xl p-4">Recherche d'adversaire...</p>
    </section>
  );
}
