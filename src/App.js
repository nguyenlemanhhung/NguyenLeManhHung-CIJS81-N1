import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Header/Nav/Nav";
import HomePage from "./views/HomePage/HomePage";
import TodoList from "./views/TodoList/TodoList";
import TrafficLights from "./views/TrafficLights/TrafficLights";
import Netlify from "./views/netlify/Netlify";
import Supermomos from "./views/supermomos/Supermomos";

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
            <Route path="/Netlify" element={<Netlify />} />
            <Route path="/Supermomos" element={<Supermomos />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
