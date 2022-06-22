import Hand from "./Hand";
import OppenentCard from "./OppenentCard";

export default function Arena() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <OppenentCard />
      <div className="h-96 m-2 border-2" />
      <Hand />
    </div>
  );
}
