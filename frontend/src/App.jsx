import Card from "./components/Card";
import Home from "./pages/Home";
import User from "./components/User";

import "./App.css";

function App() {
  return (
    <div className="App">
      <User />
      <Card />
      <Home />
    </div>
  );
}

export default App;
