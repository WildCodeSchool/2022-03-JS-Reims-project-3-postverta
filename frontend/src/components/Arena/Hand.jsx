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
    <div className=" flex ">
      <ul className="flex list-none">
        {hand.map((card) => (
          <li className="inline" key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
