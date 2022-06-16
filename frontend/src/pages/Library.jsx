import Book from "../components/Book";

const books = [
  {
    id: 1,
    title: "Le livre 1",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 2,
    title: "Le livre 2",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 3,
    title: "Le livre 3",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
];

export default function Library() {
  return (
    <div className="font-['Sansita-Regular'] bg-[url('./assets/img/dream-library.jpg')] bg-no-repeat bg-cover bg-gray-500 bg-blend-darken">
      <p className="bg-white bg-opacity-70 text-center">Bibliothèque</p>
      <p className="bg-white bg-opacity-70 text-center">Exemple de livre</p>
      <ul className=" flex flex-wrap justify-center items-center ">
        {books.map((book) => (
          <li key={book.id} className="mt-3">
            <Book key={book.id} book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}
