import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleAdd() {
    setTodoList((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter item here"
          onChange={handleChange}
          value={item}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
