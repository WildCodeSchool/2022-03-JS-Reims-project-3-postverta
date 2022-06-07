import Cardlist from "./components/CardList";
import UserList from "./components/UserList";
import Card from "./components/Card";
import User from "./components/User";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <User />
      <UserList />
      <Cardlist />
      <Card />
      <NavBar />
    </div>
  );
}

export default App;
