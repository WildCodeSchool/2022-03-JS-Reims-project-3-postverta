import { NavLink, useLocation } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) {
    return { backgroundColor: "black", color: "white" };
  }
  return {};
};

export default function Navbar() {
  const location = useLocation();
  const noNavbarPaths = ["/", "/login", "/register"];
  return noNavbarPaths.includes(location.pathname) ? null : (
    <nav className="bg-white w-screen">
      <div className="flex justify-between text-center text-sm">
        <NavLink style={getActiveLinkStyle} to="/">
          Page d'inscription
        </NavLink>

        <NavLink style={getActiveLinkStyle} to="/library">
          Bibliothèque
        </NavLink>

        <NavLink style={getActiveLinkStyle} to="/game">
          Jeu
        </NavLink>

        <NavLink style={getActiveLinkStyle} to="/deck">
          Deck
        </NavLink>

        <NavLink style={getActiveLinkStyle} to="/account">
          Compte utilisateur
        </NavLink>
      </div>
    </nav>
  );
}
