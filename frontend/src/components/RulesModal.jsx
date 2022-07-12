import regleArene from "../assets/img/règle.png";

function RulesModal() {
  return (
    <div className="h-full w-full ">
      <img src={regleArene} alt="regle" />
      <p className="text-white text-lg mt-4">
        Le but du jeu est de réduire les points de vie de l'adversaire à 0
      </p>
      <p className="text-white text-lg mt-4">
        Vous pouvez jouer des cartes de votre main sur les emplacements
        prédefinis de l'arène
      </p>
      <p className="text-white text-lg mt-4">
        Les cartes de classe Clef sont jouables une fois seulement
      </p>
      <p className="text-white text-lg mt-4">
        La pioche se fait par le biais du deck
      </p>
      <p className="text-white text-lg mt-4">Bon jeu et amuse toi bien !</p>
    </div>
  );
}

export default RulesModal;
