import { NavLink, useLocation } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) {
    return {
      backgroundColor: "black",
      color: "white",
      padding: "1rem",
    };
  }
  return { padding: "1rem" };
};

export default function Navbar() {
  const location = useLocation();
  const noNavbarPaths = ["/", "/login", "/register", "/game"];
  return noNavbarPaths.includes(location.pathname) ? null : (
    <nav className="font-['Sansita-Regular'] bg-white w-screen flex justify-around text-center text-lg">
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
        Mon Compte
      </NavLink>
    </nav>
  );
}
