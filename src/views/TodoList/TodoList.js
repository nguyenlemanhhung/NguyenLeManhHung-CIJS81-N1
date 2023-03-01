import { useState } from "react";
import "./TodoList.css";
import Todo from "./Todo";

function TodoList() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Buy milk",
      completed: false,
    },
    {
      id: 2,
      text: "Buy eggs",
      completed: false,
    },
  ]);

  const handleAddTodo = (item) => {
    if (!item) {
      console.log("Todo not found");
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 1001),
      text: item,
      completed: false,
    };
    setTodoList(() => [...todoList, data]);
  };

  const handleDeleteItem = (todo) => {
    setTodoList(() => todoList.filter((item) => item.id !== todo.id));
  };

  const handleCheckComplete = (todo) => {
    setTodoList(() =>
      todoList.map((item) => {
        if (item.id === todo.id) {
          const completed = !todo.completed;
          return { ...item, completed };
        }
        return item;
      })
    );
  };

  const handleEdit = (todo, event) => {
    setTodoList(() =>
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: event.target.value,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <div className="todo-form">
        <input
          placeholder="Enter your task here..."
          autoFocus
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn-add" onClick={() => handleAddTodo(todo)}>
          add
        </button>
      </div>
      <div className="todo-content">
        {todoList &&
          todoList.map((item, index) => (
            <Todo
              key={index}
              handleCheckComplete={handleCheckComplete}
              handleDeleteItem={handleDeleteItem}
              handleEdit={handleEdit}
              todo={item}
            />
          ))}
      </div>
      <div className="todo-footer">
        <div className="todo-footer-left">{todoList.length} tasks</div>
      </div>
    </div>
  );
}
export default TodoList;
