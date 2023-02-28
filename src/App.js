import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Header/Nav/Nav";
import HomePage from "./views/HomePage/HomePage";

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
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
