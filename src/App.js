import "./App.css";
import "./stylesheets/lesson-3/style.css";
import ToDoList from "./views/lesson-3/ToDoList";
import SignForm from "./views/lesson-3/SignForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ToDoList />
        <SignForm />
      </div>
    </div>
  );
}

export default App;
