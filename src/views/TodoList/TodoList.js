import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todo, setTodo] = useState();
  const [edit, setEdit] = useState({});
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

  const onAllowEdit = (todo, status) => {
    setEdit({ id: todo.id, status: status });
  };
  return (
    <div className="todo-container">
      <div className="todo-form">
        <input
          placeholder="Enter your task here..."
          autoFocus
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => handleAddTodo(todo)}>add</button>
      </div>
      <div className="todo-content">
        {todoList &&
          todoList.map((todo, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-item-content">
                <button
                  className="btn-check"
                  type="button"
                  onClick={() => handleCheckComplete(todo)}
                >
                  <i
                    className={todo.completed ? "fa fa-check" : "fa fa-circle"}
                    style={{
                      color: todo.completed ? "green" : "",
                    }}
                  ></i>
                </button>

                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {edit.status && edit.id === todo.id ? (
                    <input
                      value={todo.text}
                      onChange={(e) => handleEdit(todo, e)}
                    />
                  ) : (
                    todo.text
                  )}
                </p>
              </div>

              <div className="btn-actions">
                <button
                  className="btn-edit"
                  onClick={() =>
                    onAllowEdit(todo, todo.id === edit.id ? !edit.status : null)
                  }
                >
                  <i className="far fa-edit"></i>
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDeleteItem(todo)}
                >
                  <i className="fas fa-trash-alt"></i>
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
