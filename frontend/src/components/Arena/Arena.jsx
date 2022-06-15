import Hand from "./Hand";

export default function Arena() {
  return (
    <>
      <div className="advHand h-1/4">advHand</div>
      <div className="ground h-2/4 ">ground</div>
      <details className="h-1/4">
        <summary>
          <img
            src="https://www.ncbi.ie/wp-content/uploads/2020/12/DL0020a-600x702.jpg"
            alt="cards"
          />
        </summary>
        <Hand />
      </details>
    </>
  );
}
