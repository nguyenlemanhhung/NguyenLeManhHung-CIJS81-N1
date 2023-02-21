import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="to-do-container">
        <h2 className="title mb-5">To Do List</h2>
        <form className="mb-4 w-100 d-flex">
          <input
            className="w-100"
            type="text"
            placeholder="Enter your task here ..."
          />
          <button type="button" className="btn-add">
            Add
          </button>
        </form>
        <div className="content">
          <div className="to-do-item">
            <div className="form-check me-3">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Clean up bedroom</label>
            </div>
            <div className="actions">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="to-do-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Buy some milk</label>
            </div>
            <div className="actions">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="to-do-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Jogging</label>
            </div>
            <div className="actions">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="to-do-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Learn React</label>
            </div>
            <div className="actions">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
          <div className="to-do-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Doing Exercises</label>
            </div>
            <div className="actions">
              <button type="button" className="btn-edit">
                Edit
              </button>
              <button type="button" className="btn-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="footer d-flex justify-content-between align-items-center mt-5">
          <div className="count-of-task">5 tasks left !</div>
          <div className="name-todo">Mindx todolist</div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
