import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form>
          <input type="text" />
          <button type="button">Add</button>
        </form>
        <div className="content">
          <ul>
            <li>
              <input type="checkbox" />
              <span>item 1</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>item 1</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>item 1</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;
