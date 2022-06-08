import Cardlist from "./components/CardList";
import UserList from "./components/UserList";
import Card from "./components/Card";
import Home from "./pages/Home";
import User from "./components/User";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Register />
      <User />
      <UserList />
      <Cardlist />
      <Card />
      <Home />
      <NavBar />
    </div>
  );
}

export default App;
