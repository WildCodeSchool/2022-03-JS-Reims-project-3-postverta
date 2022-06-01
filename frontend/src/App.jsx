import Card from "./components/Card";
import Home from "./pages/Home";

import "./App.css";
import Userlist from "./components/Userlist";

function App() {
  return (
    <div className="App">
      <Userlist />
      <Card />
      <Home />
    </div>
  );
}

export default App;
