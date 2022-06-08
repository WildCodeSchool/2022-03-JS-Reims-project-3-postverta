import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import Library from "../pages/Library";
import Game from "../pages/Game";
import Deck from "../pages/Deck";

export default function Navbar() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navList">
          <li>
            <Link to="/RegisterPage" className="navLink">
              Register Page
            </Link>
          </li>
          <li>
            <Link to="/Library" className="navLink">
              Library
            </Link>
          </li>
          <li>
            <Link to="/Game" className="navLink">
              Game
            </Link>
          </li>
          <li>
            <Link to="/Deck" className="navLink">
              Deck
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Deck" element={<Deck />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
