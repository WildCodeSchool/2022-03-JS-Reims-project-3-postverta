import Arena from "../components/Arena/Arena";

export default function Game() {
  return (
    <div className="bg-[url('./assets/img/dream-game.jpg')] container bg-no-repeat bg-cover bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center">Jeu</p>
      <p className="bg-white bg-opacity-70 text-center">Carte</p>
      <Arena />;
    </div>
  );
}
