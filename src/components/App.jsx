import React, { useState } from "react";

function App() {
  const [i, setI] = useState("");

  const [items, setItems] = useState([]);

  function handleChange(event) {
    const k = event.target.value;
    setI(k);
  }

  function addItem(event) {
    // const k = items;
    setItems([...items, i]);

    setI("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="item" onChange={handleChange} value={i} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
