import TurnButton from "./Ground/TurnButton";
import Ground from "./Ground/Ground";

export default function Arena() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <div className="h-32 border-2" />
      <div className="h-96 m-2">
        <div className="-rotate-180">
          <Ground />
        </div>
        <TurnButton />
        <Ground />
      </div>
      <div className="h-32 border-2" />
    </div>
  );
}
