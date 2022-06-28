import Hand from "./Hand";
import OppenentCard from "./OppenentCard";
import TurnButton from "./Ground/TurnButton";
import Ground from "./Ground/Ground";
import PseudoArea from "./Ground/PseudoArea";

export default function Arena() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <OppenentCard />
      <div className="h-50 m-1">
        <div className="-rotate-180">
          <PseudoArea />
          <Ground />
        </div>
        <TurnButton />
        <PseudoArea />
        <Ground />
      </div>
      <Hand />
    </div>
  );
}
