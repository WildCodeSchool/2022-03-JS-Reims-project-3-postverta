import Cardlist from "./components/CardList";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import User from "./components/User";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cardlist />
      <Home />
      <User />
      <UserList />
      <NavBar />
    </div>
  );
}

export default App;
