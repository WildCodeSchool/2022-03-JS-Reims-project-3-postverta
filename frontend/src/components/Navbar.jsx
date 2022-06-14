import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const noNavbarPaths = ["/", "/login", "/register"];
  return noNavbarPaths.includes(location.pathname) ? null : (
    <nav className="bg-white w-screen fixed bottom-0 p-1">
      <ul className="flex justify-between text-center text-sm">
        <li>
          <Link to="/" className="">
            Page d'inscription
          </Link>
        </li>
        <li>
          <Link to="/library" className="">
            Bibliothèque
          </Link>
        </li>
        <li>
          <Link to="/game" className="">
            Jeu
          </Link>
        </li>
        <li>
          <Link to="/deck" className="">
            Deck
          </Link>
        </li>
        <li>
          <Link to="/account" className="">
            Compte utilisateur
          </Link>
        </li>
      </ul>
    </nav>
  );
}
