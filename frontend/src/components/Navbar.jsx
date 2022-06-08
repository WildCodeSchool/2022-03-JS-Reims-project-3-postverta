import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.warn(location);
  return (
    <nav className="navbar">
      <ul className="navList">
        <li>
          <Link to="/" className="navLink">
            Page d'inscription
          </Link>
        </li>
        <li>
          <Link to="/library" className="navLink">
            Bibliothèque
          </Link>
        </li>
        <li>
          <Link to="/game" className="navLink">
            Jeu
          </Link>
        </li>
        <li>
          <Link to="/deck" className="navLink">
            Deck
          </Link>
        </li>
        <li>
          <Link to="/account" className="navLink">
            Compte utilisateur
          </Link>
        </li>
      </ul>
    </nav>
  );
}
