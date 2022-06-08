import Cardlist from "./components/CardList";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import User from "./components/User";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cardlist />
      <Card />
      <User />
      <UserList />
      <NavBar />
    </div>
  );
}

export default App;
