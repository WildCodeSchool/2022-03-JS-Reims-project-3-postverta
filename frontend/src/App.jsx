import Cardlist from "./components/CardList";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import User from "./components/User";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Register />
      <User />
      <UserList />
      <Cardlist />
      <Card />
      <User />
      <UserList />
      <NavBar />
    </div>
  );
}

export default App;
