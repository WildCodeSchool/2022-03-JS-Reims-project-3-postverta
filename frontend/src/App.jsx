import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDataProvider } from "./context/UserDataContext";
import Register from "./pages/Register";
import Library from "./pages/Library";
import Game from "./pages/Game";
import Deck from "./pages/Deck";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/library" element={<Library />} />
            <Route path="/game" element={<Game />} />
            <Route path="/deck" element={<Deck />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Navbar />
        </Router>
      </UserDataProvider>
    </div>
  );
}

export default App;
