import React, { useState } from "react";
import List from "./List";
import InputSec from "./InputSec";

function App() {
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems(
      items.filter(function (item, index) {
        return index !== id;
      })
    );
  }

  function addItem(i) {
    // const k = items;
    setItems([...items, i]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputSec add={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <List key={index} id={index} item={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
