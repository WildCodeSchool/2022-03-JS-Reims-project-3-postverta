import Cardlist from "./components/CardList";
import UserList from "./components/UserList";
import Card from "./components/Card";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserList />
      <Cardlist />
      <Card />
      <Home />
    </div>
  );
}

export default App;
