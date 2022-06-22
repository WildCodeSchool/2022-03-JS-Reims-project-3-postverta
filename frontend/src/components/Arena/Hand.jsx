import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

const cardsID = [1, 31, 26, 21, 23];

export default function Hand() {
  const [hand, setHand] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => res.data)
      .then((data) => {
        setHand(data.filter((element) => cardsID.includes(element.id)));
      });
  }, []);

  return (
    <div className=" h-1/4 w-screen flex justify-center ">
      {hand.map((card) => (
        <div className="border-2 m-1  h-max text-xs ">
          <Card key={card.id} card={card} />
        </div>
      ))}
    </div>
  );
}
