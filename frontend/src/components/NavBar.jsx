import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li>
          <Link to="/" className="navLink">
            Register Page
          </Link>
        </li>
        <li>
          <Link to="/library" className="navLink">
            Library
          </Link>
        </li>
        <li>
          <Link to="/game" className="navLink">
            Game
          </Link>
        </li>
        <li>
          <Link to="/deck" className="navLink">
            Deck
          </Link>
        </li>
        <li>
          <Link to="/account" className="navLink">
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
