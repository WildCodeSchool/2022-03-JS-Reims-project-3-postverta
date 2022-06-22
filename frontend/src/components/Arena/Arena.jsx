import MyGround from "./Ground/MyGround";
import OppenentGround from "./Ground/OppenentGround";
import TurnButton from "./Ground/TurnButton";

export default function Arena() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <div className="h-32 border-2" />
      <div className="h-96 m-2">
        <div className="-rotate-180">
          <OppenentGround />
        </div>
        <TurnButton />
        <MyGround />
      </div>
      <div className="h-32 border-2" />
    </div>
  );
}
