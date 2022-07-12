import regleArene from "../assets/img/regle-arene.png";

function RulesModal() {
  return (
    <div>
      <img src={regleArene} alt="regle" />
      <p>Le but du jeu est de réduire les points de vie de l'adversaire à 0</p>
    </div>
  );
}

export default RulesModal;
