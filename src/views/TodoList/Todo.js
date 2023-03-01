import { useState } from "react";

function Todo(props) {
  const [edit, setEdit] = useState({});
  const { handleCheckComplete, handleDeleteItem, handleEdit, todo } = props;
  const onAllowEdit = (todo, status) => {
    setEdit({ id: todo.id, status: status });
  };
  return (
    <div className="todo-item">
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
              className="input-edit"
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
          <i className={edit.status ? "fas fa-check" : "fas fa-edit"}></i>
        </button>

        <button className="btn-delete" onClick={() => handleDeleteItem(todo)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
export default Todo;
