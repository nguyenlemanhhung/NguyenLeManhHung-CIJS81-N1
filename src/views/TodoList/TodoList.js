import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [todoList, setTodoList] = useState(storageTodoList ?? []);

  console.log(todo);
  console.log(todoList);
  const handleSubmit = (todo) => {
    if (!todo) {
      console.log("Data not found");
      return;
    }
    setTodoList(() => [...todoList, todo]);
    // setTodoList(() => {
    //   const newTodoList = [...todoList, todo];
    //   const jsonTodoList = JSON.stringify(newTodoList);
    //   localStorage.setItem("storageTodos", JSON.stringify(jsonTodoList));
    // });
    setTodo("");
  };
  const handleDeleteItem = (todo) => {
    setTodoList(() => todoList.filter((item) => item !== todo));
  };
  return (
    <div className="todo-container">
      <div className="todo-form">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter to do..."
        />
        <button onClick={() => handleSubmit(todo)}>add</button>
      </div>
      <div className="todo-content">
        {todoList &&
          todoList.map((todo, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-item-content">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">{todo}</label>
              </div>
              <div className="btn-actions">
                <button className="btn-edit">Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteItem(todo)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="todo-footer">
        <div className="todo-footer-left">{todoList.length} tasks</div>
      </div>
    </div>
  );
}
export default TodoList;
