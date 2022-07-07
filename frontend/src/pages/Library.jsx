import Book from "../components/Book";

const books = [
  {
    id: 1,
    title: "Fable de la Fontaine",
    type: "Fable",
    cover: "http://localhost:5000/assets/images/FableDeLaFontaine.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 2,
    title: "Contes Japonais",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/ContesJaponais.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 3,
    title: "Les septs femmes de barbe bleu",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/LesSeptsFemmesDeBarbeBleu.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 4,
    title: "Fable et legendes du Japon",
    type: "Fable",
    cover: "http://localhost:5000/assets/images/FablesEtLegendesDuJapon.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 5,
    title: "Fable de Florian",
    type: "Fable",
    cover: "http://localhost:5000/assets/images/FablesDeFlorianLeLivre.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 6,
    title: "Les Contes de ma mère l'Oye",
    type: "Contes",
    cover: "http://localhost:5000/assets/images/PerraultContes.jpg",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 7,
    title: "Fable Antoine Vincent Arnault",
    cover: "http://localhost:5000/assets/images/FableAntoineVincent.jpg",
    type: "Fable",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },

  {
    id: 8,
    title: "Contes des milles et une nuits",
    cover: "http://localhost:5000/assets/images/ContesDesMilleEtUneNuits.jpg",
    type: "Contes",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
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
          .filter((book) => book.type === "Fable")
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
