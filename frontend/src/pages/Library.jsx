import Book from "../components/Book";

const books = [
  {
    id: 1,
    title: "Fables de la Fontaine",
    type: "Fables",
    cover: "http://localhost:5000/assets/images/FableDeLaFontaine.jpg",
    synopsis:
      " Ces fables sont écrites entre 1668 et 1694 par jean de la fontaine  la plupart des fables mettant en scène des animaux anthropomorphes et contenant une morale au début ou à la fin.",
  },
  {
    id: 2,
    title: "Contes Japonais",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/ContesJaponais.jpg",
    synopsis:
      "Aussi nombreux que fascinants, les contes du Japon et leurs enseignements traversent les âges. La sagesse, mais aussi la bravoure, la sincérité ou encore l’amitié y sont centrales.",
  },
  {
    id: 3,
    title: "Les septs femmes de Barbe Bleue",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/LesSeptsFemmesDeBarbeBleu.jpg",
    synopsis:
      "Qui ne connaît le conte où Charles Perrault relate comment la femme d'un seigneur surnommé Barbe-Bleue échappe au sort infligé par lui à ses six précédentes épouses ? ",
  },
  {
    id: 4,
    title: "Fables et légendes du Japon",
    type: "Fables",
    cover: "http://localhost:5000/assets/images/FablesEtLegendesDuJapon.jpg",
    synopsis:
      "Les méchants sont punis et les bons récompensés sont plutôt destinés aux enfants, mais ces histoires très courantes au Japon, avec leur poésie et leur magie extrême orientale peuvent séduire tous les âges.",
  },
  {
    id: 5,
    title: "Fables de Florian",
    type: "Fables",
    cover: "http://localhost:5000/assets/images/FablesDeFlorianLeLivre.jpg",
    synopsis:
      "'Pour vivre heureux, vivons cachés ', ' Chacun son métier, les vaches seront bien gardées '... Qui sait aujourd'hui que l'on doit ces formules au plus prodigieux des fabulistes du XVIIIe siècle,",
  },
  {
    id: 6,
    title: "Les Contes de ma mère l'Oye",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/PerraultContes.jpg",
    synopsis:
      " L'œuvre est devenue un classique de la littérature enfantine, occultant tout le reste de la production littéraire de son auteur. ",
  },
  {
    id: 7,
    title: "Fables Antoine Vincent Arnault",
    cover: "http://localhost:5000/assets/images/FableAntoineVincent.jpg",
    type: "Fables",
    synopsis:
      "Biographie nouvelle des contemporains ou Dictionnaire historique et raisonné de tous les hommes qui, depuis la Révolution française, ont acquis de la célébrité par leurs actions, leurs écrits, leurs erreurs ou leurs crimes, ",
  },

  {
    id: 8,
    title: "Contes des milles et une nuits",
    cover: "http://localhost:5000/assets/images/ContesDesMilleEtUneNuits.jpg",
    type: "Contes",
    synopsis:
      "Menacée de mort par le sultan Schahriar, qui a juré de déflorer une vierge chaque nuit avant de la tuer au matin, la belle Shéhérazade met au point un ingénieux stratagème pour échapper à son destin.",
  },
];

export default function Library() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-library.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center mb-10 text-3xl">
        Bibliothèque
      </p>
      <p className="bg-white bg-opacity-70 text-center text-xl m-5">Fables :</p>
      <ul className="flex overflow-x-auto items-center max-w-full p-4">
        {books
          .filter((book) => book.type === "Fables")
          .map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </ul>

      <p className="bg-white bg-opacity-70 text-center text-xl  m-5">
        Contes :
      </p>
      <ul className="flex overflow-x-auto items-center max-w-full p-4">
        {books
          .filter((book) => book.type === "Contes")
          .map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </ul>
    </div>
  );
}
