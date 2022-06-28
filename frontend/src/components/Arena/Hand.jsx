import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

const cardsID = [1, 31, 26, 21, 23, 11, 3, 7, 10, 12, 28, 30];
cardsID.sort(() => Math.random() - 0.5);
const size = 8;
const randomHand = cardsID.slice(0, size);

export default function Hand() {
  const [hand, setHand] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => res.data)
      .then((data) => {
        setHand(data.filter((element) => randomHand.includes(element.id)));
      });
  }, []);

  return (
    <div className=" h-1/4 flex  overflow-x-auto">
      {hand.map((card) => (
        <div
          className="border-2 m-1 mr-8
         h-max text-xs "
        >
          <Card key={card.id} card={card} />
        </div>
      ))}
    </div>
  );
}
