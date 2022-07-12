export default function BookDetails() {
  const addCardtoUser = () => {
    console.warn("addCardtoUser");
  };

  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-library.jpg')] container bg-no-repeat bg-cover bg-gray-500 bg-blend-darken p-5">
      <div className="bg-white p-5 rounded-lg">
        <p className="text-center text-4xl">I </p>
        <p className="text-center text-2xl mb-2">LA CIGALE ET LA FOURMI</p>
        <p>
          La cigale, ayant chanté <br />
          Tout l’été, <br />
          Se trouva fort dépourvue <br />
          Quand la bise fut venue : <br />
          Pas un seul petit morceau <br />
          De mouche ou de vermisseau. <br />
          Elle alla crier famine <br />
          Chez la fourmi, sa voisine, <br />
          La priant de lui prêter <br />
          Quelque grain pour subsister <br />
          Jusqu’à la saison nouvelle. <br />
          Je vous paierai, lui dit-elle, <br />
          Avant l’oût[1], foi d’animal, <br />
          Intérêt et principal. <br />
          La fourmi n’est pas prêteuse : <br />
          C’est là son moindre défaut. — <br />
          Que faisiez-vous au temps chaud ? <br />
          Dit-elle à cette emprunteuse. — <br />
          Nuit et jour à tout venant <br />
          Je chantais, ne vous déplaise. — <br />
          Vous chantiez, j’en suis fort aise ! <br />
          Eh bien, dansez maintenant. <br />
        </p>
        <br />
        <p>1. ↑ Vieux mot français qui signifie moisson.</p>

        <br />
        <p className="text-center"> Que faisait la cigale en été ? </p>
        <br />
        <form>
          <ul className="flex justify-between">
            <li className="flex flex-col">
              <label htmlFor="1" className="text-center mb-2">
                Elle dansait
              </label>
              <input id="1" type="checkbox" />
            </li>
            <li className="flex flex-col">
              <label htmlFor="2" className="text-center mb-2">
                Elle dormait
              </label>
              <input id="2" type="checkbox" />
            </li>
            <li className="flex flex-col">
              <label htmlFor="3" className="text-center mb-2">
                Elle chantait
              </label>
              <input id="3" type="checkbox" />
            </li>
          </ul>
          <button
            type="button"
            className="bg-white font-semibold py-2 px-4 border border-black rounded-3xl mt-4 ml-32"
            onClick={addCardtoUser}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
