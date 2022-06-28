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
  {
    id: 4,
    title: "Le livre 4",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 5,
    title: "Le livre 5",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 6,
    title: "Le livre 6",
    cover: "https://picsum.photos/200/300",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu consectetur consectetur, nisi nisl consectetur, nisi nisl, euismod euismod nisi, eu consectetur consectetur nisi nisl euismod, nisi nisl consectetur, nisi nisl.",
  },
  {
    id: 7,
    title: "Le livre 7",
    cover: "https://picsum.photos/200/300",
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
      <p className="bg-white bg-opacity-70 text-center text-xl m-5">
        Fantaisie :
      </p>
      <ul className="flex overflow-x-auto items-center max-w-full p-4">
        {books.map((book) => (
          <li key={book.id} className="">
            <Book key={book.id} book={book} />
          </li>
        ))}
      </ul>
      <p className="bg-white bg-opacity-70 text-center text-xl  m-5">
        Science-fiction :
      </p>
      <ul className="flex overflow-x-auto items-center max-w-full p-4">
        {books.map((book) => (
          <li key={book.id} className="">
            <Book key={book.id} book={book} />
          </li>
        ))}
      </ul>
      <p className="bg-white bg-opacity-70 text-center text-xl  m-5">
        Romance :
      </p>
      <ul className="flex overflow-x-auto items-center max-w-full p-4">
        {books.map((book) => (
          <li key={book.id} className="">
            <Book key={book.id} book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}
