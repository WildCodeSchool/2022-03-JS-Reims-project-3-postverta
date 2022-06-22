import DeckArea from "./DeckArea";
import GraveyardArea from "./GraveyardArea";
import MagicArea from "./MagicArea";
import MonsterArea from "./MonsterArea";
import PseudoArea from "./PseudoArea";

export default function MyGround() {
  return (
    <div className=" h-40 flex justify-between">
      <PseudoArea />
      <GraveyardArea />
      <div className="w-50  grid grid-cols-3 justify-items-center place-content-center gap-4">
        <MonsterArea />
        <MagicArea />
      </div>

      <DeckArea />
    </div>
  );
}
