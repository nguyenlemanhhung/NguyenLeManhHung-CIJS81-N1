import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Header/Nav/Nav";
import HomePage from "./views/HomePage/HomePage";
import TodoList from "./views/TodoList/TodoList";
import TrafficLights from "./views/TrafficLights/TrafficLights";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <div className="App-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/TrafficLights" element={<TrafficLights />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
