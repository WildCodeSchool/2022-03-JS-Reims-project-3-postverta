import Hand from "./Hand";
import OppenentCard from "./OppenentCard";
import TurnButton from "./Ground/TurnButton";
import Ground from "./Ground/Ground";

export default function Arena() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <OppenentCard />
      <div className="h-96 m-2">
        <div className="-rotate-180">
          <Ground />
        </div>
        <TurnButton />
        <Ground />
      </div>
      <Hand />
    </div>
  );
}
