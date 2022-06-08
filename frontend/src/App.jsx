import Cardlist from "./components/CardList";
import UserList from "./components/UserList";
import Card from "./components/Card";
import User from "./components/User";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import User from "./components/User";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cardlist />
      <Card />
      <Home />
      <User />
      <UserList />
      <NavBar />
    </div>
  );
}

export default App;
