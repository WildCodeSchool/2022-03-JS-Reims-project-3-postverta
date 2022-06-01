import Cardlist from "./components/CardList";
import Card from "./components/Card";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cardlist />
      <Card />
      <Home />
    </div>
  );
}

export default App;
