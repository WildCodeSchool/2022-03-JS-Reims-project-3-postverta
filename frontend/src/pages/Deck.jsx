import RulesModal from "../components/RulesModal";
import CardList from "../components/CardList";
import Modal from "../components/Modal";

export default function Deck() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-deck.jpg')] bg-repeat bg-gray-500 bg-blend-darken flex flex-col flex-1">
      <p className="bg-white bg-opacity-70 text-center mb-10 text-3xl p-2 w-full">
        Deck
      </p>
      <CardList />
      <Modal>
        <Modal.Trigger>
          <div className="flex justify-center">
            <p className="bg-white w-24 text-2xl text-center text-black mb-4 p-1">
              Règles
            </p>
          </div>
        </Modal.Trigger>
        <Modal.Window>
          <RulesModal />
        </Modal.Window>
      </Modal>
    </div>
  );
}
