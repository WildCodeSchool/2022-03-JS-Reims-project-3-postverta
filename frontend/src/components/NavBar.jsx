import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navList">
          <li>
            <Link to="/Home" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Bibliothèque" className="navLink">
              Bibliothèque
            </Link>
          </li>
          <li>
            <Link to="/Arena" className="navLink">
              Arena
            </Link>
          </li>
          <li>
            <Link to="/Deck" className="navLink">
              Deck
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}
