import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Library from "./pages/Library";
import Game from "./pages/Game";
import Deck from "./pages/Deck";
import Account from "./pages/Account";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/game" element={<Game />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
