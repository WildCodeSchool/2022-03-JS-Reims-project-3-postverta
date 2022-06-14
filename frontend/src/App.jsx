import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Library from "./pages/Library";
import Game from "./pages/Game";
import Deck from "./pages/Deck";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/library" element={<Library />} />
          <Route path="/game" element={<Game />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
