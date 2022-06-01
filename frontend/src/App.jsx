import Cardlist from "./components/CardList";
import Card from "./components/Card";
import Home from "./pages/Home";
import User from "./components/User";

import "./App.css";

function App() {
  return (
    <div className="App">
      <User />
      <Cardlist />
      <Card />
      <Home />
    </div>
  );
}

export default App;
