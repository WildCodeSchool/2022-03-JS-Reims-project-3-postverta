import Cardlist from "./components/CardList";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import User from "./components/User";
import UserList from "./components/UserList";
import Hand from "./components/Arene/Hand";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cardlist />
      <Card />
      <User />
      <UserList />
      <Hand />
      <NavBar />
    </div>
  );
}

export default App;
