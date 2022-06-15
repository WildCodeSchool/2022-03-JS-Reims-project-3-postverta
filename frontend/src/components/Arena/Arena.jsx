import Hand from "./Hand";

export default function Arena() {
  return (
    <>
      <div className="advHand h-1/4">advHand</div>
      <div className="ground h-2/4 ">ground</div>
      <details className="h-1/4">
        <summary>
          <img src="./src/assets/img/mini-carte.png" alt="cards" />
        </summary>
        <Hand />
      </details>
    </>
  );
}
