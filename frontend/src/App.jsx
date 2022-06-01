import Card from "./components/Card";
import Home from "./pages/Home";

import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <Card />
      <Home />
    </div>
  );
}

export default App;
